var React = require("react");
var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var StudentlistAPI = require("../utils/StudentlistAPI.js");
var mockData = require("../components/StudentResultsList/mockData.js");

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = "change";
var logExpanded = false;

var fullStudentList = mockData.students;
var selectedStudents = fullStudentList;

var selectedStudId = 0;     // default 0
var selectedLabId = 0;      // default 0
selectedStudents[selectedStudId].labs[selectedLabId].isSelected = true; // first student is selected

function resetStudents() {
  //console.log("RESET STUDENTS");
  selectedStudents = [];
  selectedStudents = fullStudentList;

  selectedStudents.forEach(function(student) {
    for(var i = 0; i<student.labs.length; i++) {
      student.labs[i].isSelected = false;
    }
  });

  selectedStudents[0].labs[0].isSelected = true;
}

// Search function - inputs the query and returns a list of students
// this also set the current lab and student to the first one, if
// the student is not in the queried selection



function queryStudents(query) {
  //console.log("QUERY: " + query);
  resetStudents();
  if(query.length == 0 || query == "" || query == " ") {
    return false;
  }
  queryResults = [];
  query = query.toLowerCase();

  selectedStudents.forEach(function(cStud) {

    var uname = cStud.username.toLowerCase().indexOf(query);
    var fname = cStud.firstName.toLowerCase().indexOf(query);
    var lname = cStud.lastName.toLowerCase().indexOf(query);

    if(uname >= 0 || fname >= 0 || lname >= 0) {
      queryResults.push(cStud);
    }
  });


  console.log(queryResults);
  console.log("-------------------");

  //selectedStudents = queryResults;
  queryResults[0].labs[0].isSelected = true;
  return queryResults;
}


function getStudentLabs() {
  return selectedStudents;
}
function getSelectedStudentLab() {
  if(selectedStudents.length == 0) {
    return false;
  } else {
    return selectedStudents[selectedStudId].labs[selectedLabId];
  }
}

// updates the student list - if [] -> error
function updateStudentList(newList) {
  if(newList == 0 || !newList || newList.length == 0) {
    console.log("EMPTY UPDATE");
  }
  selectedStudents = newList;
}

function setSelectedStudentLab(sIndex,lIndex) {
  selectedStudents[selectedStudId].labs[selectedLabId].isSelected = false;
  selectedStudId = sIndex;
  selectedLabId = lIndex;
  selectedStudents[sIndex].labs[lIndex].isSelected = true;
}



function toggleLabExpand() {
  logExpanded = !logExpanded;
}

function toggleSelectedLab() {
  selectedStudents[selectedStudId].labs[selectedLabId].approved = !selectedStudents[selectedStudId].labs[selectedLabId].approved;
}

var LabViewStore = assign({},EventEmitter.prototype, {
  emitChange: function() {
    console.log("CHANGE");
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT,callback);
  },
  getExpandedStatus: function() {
    return logExpanded;
  },
  getStudentLabs: function() {
    return getStudentLabs();
  },
  getSelectedStudent: function() {
    var allStudents = getStudentLabs();
    return allStudents[selectedStudId];
  },
  getSelectedStudentLab: function() {
    var lab = getSelectedStudentLab();
    if(lab) {
      return lab;
    } else {
      return [];
    }
  }
});
LabViewStore.dispatchToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.SET_SELECTED_STUDENTLAB:
      //console.log(action.studentIndex, action.labIndex);
      setSelectedStudentLab(action.studentIndex, action.labIndex);
      LabViewStore.emitChange();
      break;
    case ActionTypes.TOGGLE_APPROVAL_STUDENTLAB:
      toggleSelectedLab();
      LabViewStore.emitChange();
      break;
    case ActionTypes.TOGGLE_LAB_EXPAND:
      toggleLabExpand();
      LabViewStore.emitChange();
      break;
    case ActionTypes.SEARCH_FOR_STUDENT:
      var keep = queryStudents(action.query);
      if(keep.length == 0) {
        // no matching results
        //console.log("NO MATCH");
        updateStudentList([]);
      } else if(!keep) {
        // query is empty -- updates the list with full student list
        // must reset the student list to the raw again.
        // might want to change this in a future version
        resetStudents();
      } else {
        updateStudentList(keep);
      }
      LabViewStore.emitChange();
      break;
    default:
      // do nothing here
  }
});

module.exports = LabViewStore;

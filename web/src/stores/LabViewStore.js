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

var allStudents = mockData.students;
var selectedStudents = allStudents;   // default all students are selected
var selectedStudId = 0;
var selectedLabId = 0;
selectedStudents[selectedStudId].labs[selectedLabId].isSelected = true;

function toggleLabExpand() {
  logExpanded = !logExpanded;
}

function resetStudents() {
  console.log(selectedStudents);
  selectedStudents = allStudents;
  selectedStudents[0].labs[0].isSelected = true;
  console.log(selectedStudents);
}

// Search function - inputs the query and returns a list of students
// this also set the current lab and student to the first one, if
// the student is not in the queried selection
function queryStudents(query) {
  // full list of students
  fullSList = selectedStudents;
  if(query.length == 0 || query == "" || query == " ") {
    return false;
  }
  queryResults = [];
  query = query.toLowerCase();

  fullSList.forEach(function(cStud) {
    var uname = cStud.username.toLowerCase().search(query);
    var fname = cStud.firstName.toLowerCase().search(query);
    var lname = cStud.lastName.toLowerCase().search(query);

    if(uname >= 0 || fname >= 0 || lname >= 0) {
      queryResults.push(cStud);
    }
  });

  /*
    REALLY HOT BUG FIX.
  */
  for(var i = 0; i<queryResults.length;i++) {
    var current = queryResults[i];
    for(var j = 0; j<current.labs.length; j++) {
      current.labs[j].isSelected = false;
    }
  }

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
  selectedStudents = newList;
}

function setSelectedStudentLab(sIndex,lIndex) {
  selectedStudents[selectedStudId].labs[selectedLabId].isSelected = false;
  selectedStudId = sIndex;
  selectedLabId = lIndex;
  selectedStudents[sIndex].labs[lIndex].isSelected = true;
}

function toggleSelectedLab() {
  selectedStudents[selectedStudId].labs[selectedLabId].approved = !selectedStudents[selectedStudId].labs[selectedLabId].approved;
}

var LabViewStore = assign({},EventEmitter.prototype, {
  emitChange: function() {
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
        updateStudentList([]);
      } else if(!keep) {
        // query is empty -- updates the list with full student list
        // must reset the student list to the raw again.
        // might want to change this in a future version
        resetStudents();
        updateStudentList(getStudentLabs());
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

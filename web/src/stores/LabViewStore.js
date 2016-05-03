var React = require("react");
var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CourseStudentsAPI = require("../utils/CourseStudentsAPI.js");
var mockData = require("../components/StudentResultsList/mockData.js");

// store dependencies
var CourseStudentsStore = require('./CourseStudentsStore.js');
var UsersStore = require('./UsersStore.js');


// utils
var LabViewUtils = require("../utils/LabViewUtils.js");


var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = "change";
var logExpanded = false;

//var fullStudentList = mockData.students;
//var selectedStudents = fullStudentList;

var selectedStudId = 0;     // default 0
var selectedLabId = 0;      // default 0
var selectedStudents = [];
//selectedStudents[selectedStudId].labs[selectedLabId].isSelected = true; // first student is selected


function updateRawList(rawList) {
  var _newList = LabViewUtils.convertRoles(rawList);
  selectedStudents = _newList;
  fullStudentList = _newList;
}

// Search function - inputs the query and returns a list of students
// this also set the current lab and student to the first one, if
// the student is not in the queried selection

function queryStudents(query) {

  resetStudents();
  if(query.length == 0 || query == "" || query == " ") {
    return false;
  }
  queryResults = [];
  query = query.toLowerCase();

  selectedStudents.forEach(function(cStud) {
    // username is not used in this view -> therefore not implemented
    //var uname = cStud.username.toLowerCase().indexOf(query);
    var fname = cStud.firstName.toLowerCase().indexOf(query);
    var lname = cStud.lastName.toLowerCase().indexOf(query);
    var fullname = (cStud.firstName + " " + cStud.lastName).toLowerCase().indexOf(query);

    if(fullname >= 0 || fname >= 0 || lname >= 0) {
      queryResults.push(cStud);
    }
  });

  if(queryResults.length > 0) {
    queryResults[0].labs[0].isSelected = true;
  }
  return queryResults;
}

function resetStudents() {

  selectedStudents = fullStudentList;
  for(var i = 0; i<selectedStudents.length; i++) {
    var c = selectedStudents[i];
    for(var j = 0; j<c.labs.length;j++) {
      c.labs[j].isSelected = false;
    }
  }
  selectedStudents[0].labs[0].isSelected = true;
}

function getStudentLabs() {
  var course = UsersStore.getActiveCourse();
  if (!CourseStudentsAPI.sentToken) {
    CourseStudentsAPI.getAllStudents(course);
    return [];
  }
}

function getSelectedStudentLab() {
  var students = getStudentLabs();
  if(selectedStudId > students.length - 1) {
    // before this is set
    selectedStudId = 0;
    selectedLabId = 0;
  }
  if(students.length > 0) {
    return students[selectedStudId].labs[selectedLabId];
  } else {
    return false;
  }
}

// updates the student list - if [] -> error
function updateStudentList(newList) {
  if(newList == 0 || !newList || newList.length == 0) {
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
    case ActionTypes.RECEIVE_STUDENTS_FOR_COURSE:
      AGDispatcher.waitFor([CourseStudentsStore.dispatchToken]);
      var studs = CourseStudentsStore.getAllStudents();
      students = updateRawList(studs);
      LabViewStore.emitChange();
      break;
    case ActionTypes.SWITCH_COURSE:
      // we want api to be triggered when needed if course is switched
      CourseStudentsAPI.sentToken = false;

      LabViewStore.emitChange();
      break;
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
        // no results => send an empty list to the updater
        updateStudentList([]);
      } else if(!keep) {
        // query is empty -> resets the students
        resetStudents();
      } else {
        // student were found and the studentList is updated
        updateStudentList(keep);
      }
      LabViewStore.emitChange();
      break;
    default:
      // do nothing here
  }
});

module.exports = LabViewStore;

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

var selectedStudId = 0;     // default 0
var selectedLabId = 0;      // default 0
var fullStudentList = [];
var selectedStudents = [];

function updateRawList(rawList) {
  if (rawList == undefined || !rawList) {
    fullStudentList = [];
    selectedStudents = fullStudentList;
  } else {
    fullStudentList = LabViewUtils.convertRoles(rawList);
    selectedStudents = fullStudentList;
  }
}

// Search function - inputs the query and returns a list of students
// this also set the current lab and student to the first one, if
// the student is not in the queried selection

function queryStudents(query) {

  resetStudents();

  if(query.length == 0 || !query) {
    return fullStudentList;
  } else {
    var sResult = [];
    var objectsList = fullStudentList;
    for(var i=0;i<objectsList.length;i++){
      var fullName = objectsList[i].firstName + " " + objectsList[i].lastName;
      if(fullName.indexOf(query) != -1) {
        sResult.push(objectsList[i]);
      }
    }
    return sResult;
  }

  if(sResult.length == 0) {
    console.log("NO RESULTS");
  }
}

/*
  Denne koden burde kanskje skrives om.
  fullStudentList henter alle brukerne, men
  burde egentlig spørre på en annen måte.
  Se på dette senere
*/

function resetStudents() {
  sList = fullStudentList;

  selectedStudId = 0;
  selectedLabId = 0;

  for(key in sList) {
    var s = sList[key];
    for(labKey in s.labs) {
      var sLab = s.labs[labKey];
      sLab.isSelected = false;
    }
  }

}

function checkStudentLab() {
  if(selectedStudId > selectedStudents.length - 1) {
    // before this is set
    selectedStudId = 0;
    selectedLabId = 0;
  }
  if(selectedStudents.length > 0) {
    var course = UsersStore.getActiveCourse();
    if (!CourseStudentsAPI.sentToken) {
      CourseStudentsAPI.getAllStudents(course);
      return [];
    }
    return selectedStudents[selectedStudId].labs[selectedLabId];
  } else {
    return false;
  }
}

// updates the student list - if [] -> error
function updateStudentList(newList) {
  resetStudents();
  selectedStudents = newList;
  resetStudents();
}

function setSelectedStudentLab(sIndex,lIndex) {
  /*

    @Hotfix Dette Fikser problemet med "out of bounds" ved søk ved en undefined index (for stor)
    Dette burde fikses ved a componenten ikke leverer index som er for høy (re-render maybe?)

  */
  if(sIndex > selectedStudents.length -1) {
    sIndex = selectedStudents.length-1;
  }
  selectedStudents[selectedStudId].labs[selectedLabId].isSelected = false;
  selectedStudId = sIndex;
  selectedLabId = lIndex;
  selectedStudents[sIndex].labs[lIndex].isSelected = true;
}

function toggleLabExpand() {
  logExpanded = !logExpanded;
}

function toggleSelectedLab() {
  var status = selectedStudents[selectedStudId].labs[selectedLabId].approved;
  selectedStudents[selectedStudId].labs[selectedLabId].approved = !status;

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
    var course = UsersStore.getActiveCourse();
    if (!CourseStudentsAPI.sentToken) {
      CourseStudentsAPI.getAllStudents(course);
      return [];
    }
    return selectedStudents;
  },
  getSelectedStudent: function() {
    return selectedStudents[selectedStudId];
  },
  getSelectedStudentLab: function() {
    var lab = checkStudentLab();
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
      updateRawList(studs);
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
      updateStudentList(keep);
      LabViewStore.emitChange();
      break;
    default:
      // do nothing here
  }
});

module.exports = LabViewStore;

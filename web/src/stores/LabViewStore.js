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

var _selectedStudId = 0;     // default 0
var _selectedLabId = 0;      // default 0
var fullStudentList = [];
var _selectedStudents = [];

function _updateRawList(rawList) {
  if (rawList == undefined || !rawList) {
    fullStudentList = [];
    _selectedStudents = fullStudentList;
  } else {
    fullStudentList = LabViewUtils.convertRoles(rawList);
    _selectedStudents = fullStudentList;
    _selectedStudents[0].labs[0].isSelected = true;
  }
}

// Search function - inputs the query and returns a list of students
// this also set the current lab and student to the first one, if
// the student is not in the queried selection

function _queryStudents(query) {
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

function _resetStudents() {
  // resetting student list
  // this will clear the selected list and set it to the list that match the query

  /*

  if(fullStudentList != 0 || fullStudentList != [] || fullStudentList.length != 0) {
    _selectedStudents = fullStudentList;
    for(var i = 0; i<_selectedStudents.length; i++) {
      var c = _selectedStudents[i];
      for(var j = 0; j<c.labs.length;j++) {
        c.labs[j].isSelected = false;
      }
    }
    _selectedStudents[0].labs[0].isSelected = true;
  } else {
    _selectedStudents = [];
  }

  */
}

function _checkStudentLab() {
  if(_selectedStudId > _selectedStudents.length - 1) {
    // before this is set
    _selectedStudId = 0;
    _selectedLabId = 0;
  }
  if(_selectedStudents.length > 0) {    var course = UsersStore.getActiveCourse();
    if (!CourseStudentsAPI.sentToken) {
      CourseStudentsAPI.getAllStudents(course);
      return [];
    }
    return _selectedStudents[_selectedStudId].labs[_selectedLabId];
  } else {
    return false;
  }
}

// updates the student list - if [] -> error
function _updateStudentList(newList) {
  _selectedStudents = newList;

  for(var i = 0; i<newList.length; i++) {
    for(var j = 0; j<newList[i].labs.length; j++) {
      newList[i].labs[j].isSelected = false;
    }
  }
  _selectedStudents[0].labs[0].isSelected = true;
}

function _setSelectedStudentLab(sIndex,lIndex) {
  _selectedStudents[_selectedStudId].labs[_selectedLabId].isSelected = false;
  _selectedStudId = sIndex;
  _selectedLabId = lIndex;
  _selectedStudents[sIndex].labs[lIndex].isSelected = true;
}

function _toggleLabExpand() {
  logExpanded = !logExpanded;
}

function _toggleSelectedLab() {
  var status = _selectedStudents[_selectedStudId].labs[_selectedLabId].approved;
  _selectedStudents[_selectedStudId].labs[_selectedLabId].approved = !status;

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
    return _selectedStudents;
  },
  getSelectedStudent: function() {
    return _selectedStudents[_selectedStudId];
  },
  getSelectedStudentLab: function() {
    var lab = _checkStudentLab();
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
      _updateRawList(studs);
      LabViewStore.emitChange();
      break;
    case ActionTypes.SWITCH_COURSE:
      // we want api to be triggered when needed if course is switched
      CourseStudentsAPI.sentToken = false;
      LabViewStore.emitChange();
      break;
    case ActionTypes.SET_SELECTED_STUDENTLAB:
      //console.log(action.studentIndex, action.labIndex);
      _setSelectedStudentLab(action.studentIndex, action.labIndex);
      LabViewStore.emitChange();
      break;
    case ActionTypes.TOGGLE_APPROVAL_STUDENTLAB:
      _toggleSelectedLab();
      LabViewStore.emitChange();
      break;
    case ActionTypes.TOGGLE_LAB_EXPAND:
      _toggleLabExpand();
      LabViewStore.emitChange();
      break;
    case ActionTypes.SEARCH_FOR_STUDENT:
      var keep = _queryStudents(action.query);
      _updateStudentList(keep);
      LabViewStore.emitChange();
      break;
    default:
      // do nothing here
  }
});

module.exports = LabViewStore;

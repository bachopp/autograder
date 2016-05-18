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



var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = "change";
var logExpanded = false;


var _selectedStudId = 0;     // default 0
var _selectedLabId = 0;      // default 0

//var _selectedStudents = fullStudentList;
var fullStudentList = [];
var _selectedStudents = [];
//_selectedStudents[_selectedStudId].labs[_selectedLabId].isSelected = true; // first student is selected

var Student = function() {
  this.id = null;
  this.username = "";
  this.firstName = "";
  this.lastName = "";
  this.studentNumber = "";
  this.slipDays = null;
  this.hasGroup = false;
  this.labs = [
    {
      id: 0,
      title: "Lab 1",
      approved: false,
      log: [
        "1: Running program",
        "2: Running helloworld.go, =====> 100%",
        "3: Testing helloworld.go, =====> 100%",
        "4: TEST1: 100%",
        "5: TEST2: 100%",
        "6: TESTS PASSED",
        "7. Bigger labs",
        "8. Longer logs",
        "9. What next?",
        "10. You decide",
        "11. ...",
        "12. 100200100",
        "13. LAB PASSED"
      ],
      percent: 100,
      isSelected: false
    },{
      id: 0,
      title: "Lab 2",
      approved: true,
      log: ["The build log comes here"],
      percent: 70,
      isSelected: false
    },{
      id: 0,
      title: "Lab 3",
      approved: false,
      log: ["The build log comes here"],
      percent: 30,
      isSelected: false
    },{
      id: 0,
      title: "Lab 4",
      approved: false,
      log: ["The build log comes here"],
      percent: 65,
      isSelected: false
    },{
      id: 0,
      title: "Lab 5",
      approved: true,
      log: ["The build log comes here"],
      percent: 65,
      isSelected: false
    }
  ];
}

function _updateRawList(rawList) {
  _newList = [];
  if (rawList == undefined || !rawList) {
    fullStudentList = [];
    _selectedStudents = fullStudentList;
  } else {
    for(var i = 0; i<rawList.length; i++) {
      var current = rawList[i];
      var s = new Student();
      s.id = current.ID -1;               // HOT FIXING
      s.username = current.Github;
      s.firstName = current.FirstName;
      s.lastName = current.LastName;
      s.studentNumber = 223344;
      s.slipDays = 6;
      s.hasGroup = false;
      _newList.push(s);
    }
    fullStudentList = _newList;
    _selectedStudents = fullStudentList;
  }
}

// Search function - inputs the query and returns a list of students
// this also set the current lab and student to the first one, if
// the student is not in the queried selection


function _queryStudents(query) {

  _resetStudents();
  if(query.length == 0 || query == "" || query == " ") {
    return false;
  }
  queryResults = [];
  query = query.toLowerCase();

  _selectedStudents.forEach(function(cStud) {
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

function _resetStudents() {

  _selectedStudents = fullStudentList;
  for(var i = 0; i<_selectedStudents.length; i++) {
    var c = _selectedStudents[i];
    for(var j = 0; j<c.labs.length;j++) {
      c.labs[j].isSelected = false;
    }
  }
  _selectedStudents[0].labs[0].isSelected = true;
}

function _checkStudentLab() {
  if(_selectedStudId > _selectedStudents.length - 1) {
    // before this is set
    _selectedStudId = 0;
    _selectedLabId = 0;
  }
  if(_selectedStudents.length > 0) {
    return _selectedStudents[_selectedStudId].labs[_selectedLabId];
  } else {
    return false;
  }
}

// updates the student list - if [] -> error
function _updateStudentList(newList) {
  if(newList == 0 || !newList || newList.length == 0) {
  }
  _selectedStudents = newList;
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
  _selectedStudents[_selectedStudId].labs[_selectedLabId].approved = !_selectedStudents[_selectedStudId].labs[_selectedLabId].approved;
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
      if(keep.length == 0) {
        // no results => send an empty list to the updater
        _updateStudentList([]);
      } else if(!keep) {
        // query is empty -> resets the students
        _resetStudents();
      } else {
        // student were found and the studentList is updated
        _updateStudentList(keep);
      }
      LabViewStore.emitChange();
      break;
    default:
      // do nothing here
  }
});

module.exports = LabViewStore;

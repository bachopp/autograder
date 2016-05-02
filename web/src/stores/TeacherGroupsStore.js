var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// api
var TeacherGroupsAPI = require("../utils/TeacherGroupsAPI.js");


// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var TeacherGroupsStoreUtils = require('../utils/TeacherGroupsStoreUtils.js');
// store dependencies
var TeacherGroupsStore = require('./TeacherGroupsStore.js');
var UsersStore = require('./UsersStore.js');

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _groups = [];
var _activeGroup = false;

var _students = [];
var _query = [];
var _selectedStudent = '';

var _isGroupsExpanded = false;

function _removeGroup(group) {
  for (var i = 0; i < _groups.length; i++) {
    if (_groups[i] === group) {
      group.users.forEach(function(user){
        _students.push(user);
      })
      _groups.splice(i, 1);
      // TODO: hope for feedback from the server ... on adding students back to the student store
      break;
    }
  }
}

function _addGroup() {
  var len = _groups.length + 1;
  var newGroup = {name:"groups_"+ len, number: len, users:[]};
  _groups.push(newGroup);
}

function _setOneGroupActive(group) {
  _activeGroup = false;
  _groups.forEach(function(grp) {
    if (grp === group) {
      grp.active = true;
      _activeGroup = true;
    } else {
      grp.active = false;
    }
  });
}

function _isAnyGroupActive() {
  return _activeGroup;
}

function _expandAllGroups() {
  isAnyExpanded = false;

  for (var i = 0; i < _groups.length; i++) {
    if (_groups[i].expanded) {
      isAnyExpanded = true;
      break;
    }
  }
  if (isAnyExpanded){
    _groups.forEach(function(grp){
      grp.expanded = false;
    });
    _isGroupsExpanded = false;
  } else {
    _groups.forEach(function(grp){
      grp.expanded = true;
      _isGroupsExpanded = true;
    });
  }

}

function _addStudentToActiveGroup(student) {
  _groups.forEach(function(grp) {
    if (grp.active) {
      grp.users.push(student);
    }
  });
}

function _newGroups(newGroups) {
  _groups = newGroups;
}

function _selectStudent(student) {
  _selectedStudent = student;
}

function _removeStudent(student) {
  for (var i = 0; i < _students.length; i++) {
    if (_students[i] === student) {
      _students[i].hasGroup = true;
      _students.splice(i, 1);
      _selectedStudent = student;
      break;
    }
  }
}

function _studentHasGroup(student) {
  return false;
}

function _newStudents(newStudents) {
  _query = _students;
  _students = newStudents;
  return _query;
}

function _searchFor(query) {
  _query = [];
  _staticStudents = _students;
  _students.forEach(function(std) {
    var q = query.toLowerCase();
    var unamepos = std.username.toLowerCase().search(q);
    var fnamepos = std.firstName.toLowerCase().search(q);
    var lnamepos = std.lastName.toLowerCase().search(q);
    var stnumpos = String(std.studentNumber).toLowerCase().search(q);

    if (unamepos >= 0|| fnamepos >= 0|| lnamepos >= 0|| stnumpos >= 0) {
        _query.push(std);
    }
  });
  return _query;
}

function _removeStudentFromGroup(student, group) {
  _groups.forEach(function(grp) {
    if (grp === group) {
      var users = grp.users;
      for (var i = 0; i < users.length; i++) {
        if (users[i] === student) {
          _students.push(student);
          users.splice(i, 1);
          break;
        }
      }
      grp.users = users;
    }
  });
}

var TeacherGroupsStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },


  getAllGroups: function() {
    var course = UsersStore.getActiveCourse();
      if (!TeacherGroupsAPI.sentToken) {
        TeacherGroupsAPI.getAllGroups(course);
        console.log([]);
        return [];
      }
      return _groups;
  },
  getActiveGroup: function() {
    return _activeGroup;
  },

  getSelectedStudent: function() {
    return _selectedStudent;
  },

  getAllStudents: function() {
    var course = UsersStore.getActiveCourse();
      if (!TeacherGroupsAPI.sentToken) {
        TeacherGroupsAPI.getAllStudents(course);
        return [];
      }
      return _students;
  },

  isGroupsExpanded: function() {
    return _isGroupsExpanded;
  },
});

TeacherGroupsStore.dispachToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    // TODO: finish switch statement for different actions

    case ActionTypes.RECEIVE_GROUPS_FOR_COURSE:
      _newGroups(action.rawGroups);
      TeacherGroupsStore.emitChange();
      console.log(action);
      break;
    case ActionTypes.RECEIVE_RAW_GROUPS:
      _newGroups(action.rawGroups);
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.TOGGLE_GROUP:
      _setOneGroupActive(action.group);
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.ADD_NEW_GROUP:
      _addGroup();
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.REMOVE_GROUP:
      _removeGroup(action.group);
      _setOneGroupActive();
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.ADD_TO_GROUP:
      _selectStudent(action.rawStudent);
      if (_isAnyGroupActive() && !_studentHasGroup(action.rawStudent)) {
        _removeStudent(action.rawStudent);
        _addStudentToActiveGroup(action.rawStudent);
      } else {
        alert("CHOOSE GROUP FIRST");
      }
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.REMOVE_STUDENT_FROM_GROUP:
      _removeStudentFromGroup(action.student, action.group);
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.RECEIVE_STUDENTS_FOR_COURSE:
      students = TeacherGroupsStoreUtils.convertStudents(action.rawStudents);
      _newStudents(students);
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.SWITCH_COURSE:
      // we want api to be triggered when needed if course is switched
      TeacherGroupsAPI.sentToken = false;
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.QUERY_FOR_STUDENT:
      var keep = _newStudents(_searchFor(action.query));
      var _ = _newStudents(keep);
      TeacherGroupsStore.emitChange();
      break;
    case ActionTypes.EXPANDE_ALL_GROUPS:
      _expandAllGroups();
      TeacherGroupsStore.emitChange();
      break;
    default:
     // no action
  }
});

module.exports = TeacherGroupsStore;

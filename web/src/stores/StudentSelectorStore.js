var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var TopBarUtils = require('../utils/TopBarUtils');
var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _students = [];
var _query = [];

function _removeStudent(student) {
  for (var i = 0; i < _students.length; i++) {
    if (_students[i] === student) {
      _students.splice(i, 1);
      break;
    }
  }
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

var StudentSelectorStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllStudents: function() {
    return _students;
  },
});

StudentSelectorStore.dispachToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    // TODO: finish switch statement for different actions
    case ActionTypes.RECEIVE_RAW_STUDENTS:
      _newStudents(action.rawStudents);
      StudentSelectorStore.emitChange();
      break;
    case ActionTypes.ADD_TO_GROUP:
      // TODO: if no group selected the student disappears, needs fix
      var student = action.rawStudent;
      _removeStudent(student);
      StudentSelectorStore.emitChange();
      break;
    case ActionTypes.QUERY_FOR_STUDENT:
      var keep = _newStudents(_searchFor(action.query));
      StudentSelectorStore.emitChange();
      var _ = _newStudents(keep)
    default:
     // no action
  }

});

module.exports = StudentSelectorStore;

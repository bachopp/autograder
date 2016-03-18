var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var TopBarUtils = require('../utils/TopBarUtils');
var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _students = [];

function _removeStudent(student) {
  for (var i = 0; i < _students.length; i++) {
    if (_students[i] === student) {
      _students.splice(i, 1);
      break;
    }
  }
}

function _newStudents(newStudents) {
  _students = newStudents;
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
  }
});

StudentSelectorStore.dispachToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    // TODO: finish switch statement for different actions
    case ActionTypes.ADD_TO_GROUP:
     // TODO: use Util to make rawStudent into whatever you want (a lot of reduntatn fields probably)
      var student = action.rawStudent;
      _removeStudent(student);
      StudentSelectorStore.emitChange();
      break;
    case ActionTypes.RECEIVE_RAW_STUDENTS:
      _newStudents(action.rawStudents);
      StudentSelectorStore.emitChange();
      break;
    default:
     // no action
  }

});

module.exports = StudentSelectorStore;

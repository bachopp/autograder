var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// api
var CourseStudentsAPI = require("../utils/CourseStudentsAPI.js");


// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

// store dependencies
var CourseStudentsStore = require('./CourseStudentsStore.js');
var UsersStore = require('./UsersStore.js');

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _students = [];

var CourseStudentsStore = assign({}, EventEmitter.prototype, {

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

CourseStudentsStore.dispatchToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    // TODO: finish switch statement for different actions
    case ActionTypes.RECEIVE_STUDENTS_FOR_COURSE:
      _students = action.rawStudents;
      CourseStudentsStore.emitChange();
      break;
    default:
     // no action
  }
});

module.exports = CourseStudentsStore;

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var ActionTypes = AGConstants.ActionTypes;
var CoursesAPIUtils = require("../utils/CoursesAPIUtils.js")

// utils
var CoursesUtils = require('../utils/CoursesUtils.js');

var CHANGE_EVENT = 'change';

// this is temporary the same as TopBarStore, but will incorporate more Courses
// like course description and number of students
var _courses = {};

function _newCourses(newCourses) {
  _courses = newCourses;
}

var CoursesStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllCourses: function() {
    return _courses;
  },
});


CoursesStore.dispatchToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    // TODO: finish switch statement for different actions
    case ActionTypes.RECEIVE_RAW_COURSES:
      _newCourses(action.rawCourses);
      CoursesStore.emitChange();
      break;
    default:
     // no action
  }

});

module.exports = CoursesStore;

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var CourseNavUtils = require('../utils/CoursesUtils.js');

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _navCourses = [];
var _currentRole = '';

var _currentSideNav = "/results";
var _activeCourse = {name: "/DAT100"};

var CourseNavStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCoursesForMode: function() {
    return _navCourses;
  },
  getCurrentSideNav: function() {
    return _currentSideNav;
  },
  getActiveCourse: function() {
    return _activeCourse;
  },
  getRole: function() {
    return _currentRole;
  },

});

CourseNavStore.dispatchToken = AGDispatcher.register(function(action) {

  switch(action.type) {
    // TODO: finish switch statement for different actions

    case ActionTypes.RECEIVE_COURSES_FOR_MODE:
      var courses = CourseNavUtils.convertRawCourses(action.modeCourses, action.mode);

      _navCourses = courses;
      _currentRole = action.mode;

      CourseNavStore.emitChange();
      break;
    case ActionTypes.SWITCH_MODE:

      break;
    case ActionTypes.SWITCH_COURSE:
      // TODO: create constant, create action and call for actions in CourseNav!
      break;
    case ActionTypes.SWITCH_SIDE_NAV:
      // TODO:
      break;
    default:
      // no action
      return;
  }

});

module.exports = CourseNavStore;

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var CourseNavUtils = require('../utils/CourseNavUtils.js');

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _navCourses = [];
var _currentRole = '';

var _currentSideNav = '';
var _activeCourse = '';

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
      _navCourses = CourseNavUtils.convertRawCourses(action.modeCourses.Courses);
      _currentRole = action.modeCourses.Mode;
      _activeCourse = _navCourses[0];
      CourseNavStore.emitChange();
      break;
    case ActionTypes.SWITCH_MODE:
      _currentRole = action.mode;
      CourseNavStore.emitChange();
      break;
    case ActionTypes.SWITCH_COURSE:
      _activeCourse = action.course;
      // TODO: create constant, create action and call for actions in CourseNav!
      CourseNavStore.emitChange();
      break;
    case ActionTypes.SWITCH_SIDE_NAV:
      // console.log(action.mode);
      // _currentSideNav = action.mode;
      // CourseNavStore.emitChange();
      break;
    default:
      // no action
      return;
  }

});

module.exports = CourseNavStore;

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// constants
var constants = require('../constants/constants.js');
var mode = constants.mode;

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var TopBarUtils = require('../utils/TopBarUtils');
var CourseNavUtils = require('../utils/CourseNavUtils.js');

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _roles = [];

var _navCourses = [];
var _currentRole = '';

var _currentSideNav = '';
var _activeCourse = '';


function _addRoles(rawRoles) {
  _roles = rawRoles;
}

var UsersStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllRoles: function() {
    return _roles;
  },

  getCoursesForMode: function(mode) {
    courses = [];
    for (var key in _roles) {
      if (_roles[key].Mode == mode) {
        for (var key2 in _roles[key].Courses) {
          for (var key3 in _roles[key].Courses[key2]) {
            courses.push(_roles[key].Courses[key2][key3].Name);
          }
        }
        return courses;
      }
    }
    return courses;
  },
  getCurrentSideNav: function() {
    return _currentSideNav;
  },
  getActiveCourse: function() {
    return _activeCourse;
  },
  getCurrentRole: function() {
    return _currentRole;
  },
});


UsersStore.dispachToken = AGDispatcher.register(function(action) {

  switch(action.type) {
    // TODO: finish switch statement for different actions

     case ActionTypes.RECEIVE_RAW_ROLES:
      roles = TopBarUtils.convertRawRole(action.rawRoles)
      _addRoles(roles);
      UsersStore.emitChange();
      break;
    case ActionTypes.SWITCH_MODE:
      courses = CourseNavUtils.convertToCourses(_roles, action.mode)
      _currentRole = action.mode;
      UsersStore.emitChange();
      break;
    case ActionTypes.RECEIVE_COURSES_FOR_MODE:
      _navCourses = CourseNavUtils.convertRawCourses(action.modeCourses.Courses);
      _currentRole = action.modeCourses.Mode;
      UsersStore.emitChange();
      break;
    case ActionTypes.SWITCH_COURSE:
      _activeCourse = action.course;
      // TODO: create constant, create action and call for actions in CourseNav!
      UsersStore.emitChange();
      break;
    case ActionTypes.SWITCH_SIDE_NAV:
      // console.log(action.mode);
      // _currentSideNav = action.mode;
      // UsersStore.emitChange();
      break;
     default:
     // no action
  }

});

module.exports = UsersStore;

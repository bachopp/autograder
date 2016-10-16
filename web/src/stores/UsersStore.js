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

var CoursesStore = "./CoursesStore.js";


var ActionTypes = AGConstants.ActionTypes;

var CHANGEEVENT = 'change';

var roles = [];

var navCourses = [];
var currentRole = '';

var currentSideNav = '';
var activeCourseTeacher = '';
var activeCourseStudent= '';


function addRoles(rawRoles) {
  roles = rawRoles;
}

function changeCourse(course) {
  if (currentRole == mode.Teacher) {
    activeCourseTeacher = course;
  } else if (currentRole == mode.Student) {
    activeCourseStudent = course;
  }
}

var UsersStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGEEVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGEEVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGEEVENT, callback);
  },

  getAllRoles: function() {
    return roles;
  },

  getCoursesForMode: function(mode) {
    courses = [];
    for (var key in roles) {
      if (roles[key].Mode == mode) {
        for (var key2 in roles[key].Courses) {
          for (var key3 in roles[key].Courses[key2]) {
            courses.push(roles[key].Courses[key2][key3].Name);
          }
        }
        return courses;
      }
    }
    return courses;
  },
  getCurrentSideNav: function() {
    return currentSideNav;
  },
  getAllActiveUsers: function() {
    // this should return a full list of students. Admins
    // should be able to see all active users on the Autograder network.

    // dette blir en skitten fix, men kanskje det funker.

    
    console.log(CoursesStore.getAllCourses());


    return [];

  },
  getActiveCourse: function(m) {
    // if mode provided - topbar + external links
    if (m == mode.Teacher) {
      return activeCourseTeacher;
    } else if (m == mode.Student) {
      return activeCourseStudent;
    }

    // if mode not provided use active mode
    if (currentRole == mode.Teacher) {
      return activeCourseTeacher;
    } else if (currentRole == mode.Student) {
      return activeCourseStudent;
    }
  },
  getCurrentRole: function() {
    return currentRole;
  },
});


UsersStore.dispachToken = AGDispatcher.register(function(action) {

  switch(action.type) {
    // TODO: finish switch statement for different actions

     case ActionTypes.RECEIVERAWROLES:
      roles = TopBarUtils.convertRawRole(action.rawRoles)
      addRoles(roles);
      UsersStore.emitChange();
      break;
    case ActionTypes.SWITCHMODE:
      courses = CourseNavUtils.convertToCourses(roles, action.mode)
      currentRole = action.mode;
      UsersStore.emitChange();
      break;
    case ActionTypes.RECEIVECOURSESFORMODE:
      navCourses = CourseNavUtils.convertRawCourses(action.modeCourses.Courses);
      currentRole = action.modeCourses.Mode;
      UsersStore.emitChange();
      break;
    case ActionTypes.SWITCHCOURSE:
      changeCourse(action.course);
      // TODO: create constant, create action and call for actions in CourseNav!
      UsersStore.emitChange();
      break;
    // case ActionTypes.SWITCHSIDENAV:
    //   // currentSideNav = action.mode;
    //   // UsersStore.emitChange();
    //   break;
     default:
     // no action
  }

});

module.exports = UsersStore;

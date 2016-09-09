var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');
var CoursepageAPI = require("../utils/CoursepageAPI");
var UserManagerServerActionCreators = require("../actions/UserManagerServerActionCreators");
var ActionTypes = AGConstants.ActionTypes;
var UsersStore = require("./UsersStore.js");
var CourseStudentsAPI = require("../utils/CourseStudentsAPI.js");

// TODO: Maybe change this
var CourseStudentsStore = require("./CourseStudentsStore.js");


// change event
var CHANGE_EVENT = 'change';

var _students = [];

function _updateRawList(newList) {
  if(!newList || newList == null || newList == undefined) {
    _students = [];
  } else {
    _students = newList;
  }
}

var UserManagerStore = assign({},EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT,callback);
  },
  getAllUsers: function() {
    var course = UsersStore.getActiveCourse();
    if(!CourseStudentsAPI.sentToken) {
      CourseStudentsAPI.getAllStudents(course);
      return [];
    }
    return _students;
  }
});


UserManagerStore.dispatchToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.RECEIVE_STUDENTS_FOR_COURSE:
      AGDispatcher.waitFor([CourseStudentsStore.dispatchToken]);
      var studs = CourseStudentsStore.getAllStudents();
      _updateRawList(studs);
      UserManagerStore.emitChange();
    break;



    default:
      // do nothing
  }
});

module.exports = UserManagerStore;

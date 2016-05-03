var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');
var CoursepageAPI = require("../utils/CoursepageAPI");
var UserManagerServerActionCreators = require("../actions/UserManagerServerActionCreators");
var ActionTypes = AGConstants.ActionTypes;

// change event
var CHANGE_EVENT = 'change';

var students = [];


function returnStudents() {
  if(students == [] || students.length == 0) {
    CoursepageAPI.getStudentsForCourse("DAT100");
  } else {
    return students;
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
  getStudents: function() {
    var stud = returnStudents();
    return stud;
  }
});

UserManagerStore.dispatchToken = AGDispatcher.register(function(action) {
  // switch(action.type) {
  //   case ActionTypes.UPDATE_STUDENT_STATUS:
  //
  //     break;
  //   case ActionTypes.RECEIVE_STUDENTS_FOR_COURSE:
  //     // get students
  //     updateStudentsList(action.courseStudents);
  //     UserManagerStore.emitChange();
  //     break;
  //   default:
  //     // do nothing
  // }

});

module.exports = UserManagerStore;

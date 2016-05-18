var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");
var CoursesServerActionCreators = require("../actions/CoursesServerActionCreators");
var CourseNavServerActionCreators = require("../actions/CourseNavServerActionCreators");
var StudentResultsListServerActionCreators = require("../actions/StudentResultsListServerActionCreators");
var CourseStudentsServerActionCreators = require("../actions/CourseStudentsServerActionCreators");
var TeacherGroupsServerActionCreators = require("../actions/TeacherGroupsServerActionCreators");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket =  function() {

  this.ws = new WebSocket("ws://localhost:8000/ws");

  this.message = function(m) {

    // this catches errors from server, if response is something that we do not expext
    try {
      var data = JSON.parse(m.data);
    }
    catch(err) {
      console.log(err);
      console.log(m.data);
      return
    }

    switch(data.actionType) {
      case ActionTypes.RECEIVE_RAW_ROLES:
        TopBarServerActionCreators.receiveAll(data.payload);
        CoursesServerActionCreators.receiveAll(data.payload);
        break;
      case ActionTypes.RECEIVE_COURSES_FOR_MODE:
        CourseNavServerActionCreators.receiveModeCourses(data.payload);
        break;
      case ActionTypes.RECEIVE_STUDENTS_FOR_COURSE:
        CourseStudentsServerActionCreators.receiveStudents(data.payload);
        break;
      case ActionTypes.RECEIVE_GROUPS_FOR_COURSE:
        TeacherGroupsServerActionCreators.receiveGroups(data.payload);
      default:
        // do nothing
    }
  };

  this.open = function() {
    // TODO: emit connected on open instead of wait ?
  };

  this.close = function() {
    // TODO:
  };

  this.ws.onmessage = this.message;
  this.ws.onopen = this.open;
  this.ws.onclose = this.close;

  // see this.open
  this.waitForSocketConnection = function waitForSocketConnection(socket, callback){
    setTimeout(
      function(){
        if (socket.readyState === 1) {
          if(callback !== undefined){
              callback();
          }
          return;
        } else {
          waitForSocketConnection(socket,callback);
        }
      }, 1 //ms
    );
  };
};


module.exports = new Socket();

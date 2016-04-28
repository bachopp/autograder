var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");
var CoursesServerActionCreators = require("../actions/CoursesServerActionCreators");
var CourseNavServerActionCreators = require("../actions/CourseNavServerActionCreators");
var TeacherGroupsServerActionCreators = require("../actions/TeacherGroupsServerActionCreators");


var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket =  function() {

  this.ws = new WebSocket("ws://localhost:8000/ws");

  this.message = function(m) {
    // TODO: emit that message has arrived
    // figure out what ActionCreator to call with new data?
    var data = JSON.parse(m.data);

    switch(data.actionType) {
      case ActionTypes.RECEIVE_RAW_ROLES:
        TopBarServerActionCreators.receiveAll(data.payload);
        CoursesServerActionCreators.receiveAll(data.payload);
        break;
      case ActionTypes.RECEIVE_COURSES_FOR_MODE:
        CourseNavServerActionCreators.receiveModeCourses(data.payload);
        break;
      case ActionTypes.RECEIVE_STUDENTS_FOR_COURSE:
        TeacherGroupsServerActionCreators.receiveStudents(data.payload);
        console.log(data.payload);
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

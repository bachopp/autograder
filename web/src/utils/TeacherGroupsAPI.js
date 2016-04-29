var RequestAPI = require("./RequestAPI.js");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var TeacherGroupsServerActionCreators = require("../actions/TeacherGroupsServerActionCreators.js");

var Socket = require("./Socket.js");

module.exports = {
  // TODO:  remove waifFor when it's fixed
  // TODO:  structurize payload better
  sentToken: false,

  getAllStudents: function(course) {
    Socket.waitForSocketConnection(Socket.ws, function() {
      var payload = RequestAPI.send(ActionTypes.RECEIVE_STUDENTS_FOR_COURSE, {"courseName": course});
      Socket.ws.send(payload);
    });
    this.sentToken = true;
  },

  getAllGroups: function(course) {
    var mock = require("../components/GroupSelector/mock.js");
    var arr = mock.stnr();
    console.log(course);
    TeacherGroupsServerActionCreators.receiveGroups(arr);

    // Socket.waitForSocketConnection(Socket.ws, function() {
    //   var payload = RequestAPI.send(ActionTypes.RECEIVE_GROUPS_FOR_COURSE, {"courseName": course});
    //   Socket.ws.send(payload);
    // });

    this.sentToken = true;
  },

};

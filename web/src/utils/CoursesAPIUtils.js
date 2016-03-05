var CoursesServerActionCreators = require("../actions/TopBarServerActionCreators");
var RequestAPI = require("./RequestAPI.js");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket = require("./Socket.js");

module.exports = {
  // TODO: ask socket for data from server
  getAllCourses: function() {
    Socket.waitForSocketConnection(Socket.ws, function() {
      // TODO:
      var payload = RequestAPI.send(ActionTypes.RECEIVE_RAW_COURSES, {"username": "thomas"});
      // var payload = JSON.stringify({"name": "student", "data": {"username": "thomas"}});
      Socket.ws.send(payload);
    });
  }
};

var CoursesServerActionCreators = require("../actions/TopBarServerActionCreators.js");
var RequestAPI = require("./RequestAPI.js");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket = require("./Socket.js");

module.exports = {
  // TODO:  remove waifFor when it's fixed
  // TODO:  call for more data, like course description
  getAllCourses: function() {
    Socket.waitForSocketConnection(Socket.ws, function() {
      // var payload = RequestAPI.send(ActionTypes.RECEIVE_RAW_COURSES, {"username": "thomas"});
      // Socket.ws.send(payload);
    });
  }
};

var CourseNavServerActionCreators = require("../actions/CourseNavServerActionCreators.js");
var RequestAPI = require("./RequestAPI.js");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket = require("./Socket.js");

module.exports = {
  // TODO:  remove waifFor when it's fixed
  // TODO:  call for more data, like course description
  getCoursesForMode: function(mode) {
    Socket.waitForSocketConnection(Socket.ws, function() {
      var payload = RequestAPI.send(ActionTypes.RECEIVE_COURSES_FOR_MODE, {"username": "tokams", "mode": mode});
      Socket.ws.send(payload);
    });
  }
};

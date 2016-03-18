var RequestAPI = require("./RequestAPI.js");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var TeacherGroupServerActionCreators = require("../actions/TeacherGroupServerActionCreators.js");

var Socket = require("./Socket.js");

module.exports = {
  // TODO:  remove waifFor when it's fixed
  // TODO:  structurize payload better
  getAllStudents: function() {
    var mock = require("../components/student.group.selector/mock.js");
    
    Socket.waitForSocketConnection(Socket.ws, function() {
      // var payload = RequestAPI.send(ActionTypes.RECEIVE_RAW_STUDENTS, {"username": "thomas"});
      // Socket.ws.send(payload);
      var arr = mock.stnr();
      TeacherGroupServerActionCreators.receiveStudents(arr);
    });
  }
};

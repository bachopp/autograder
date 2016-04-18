var TeacherGroupsServerActionCreators = require("../actions/TeacherGroupsServerActionCreators.js");
var RequestAPI = require("./RequestAPI.js");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket = require("./Socket.js");

module.exports = {
  // TODO:  remove waifFor when it's fixed
  // TODO:  structurize payload better
  getAllGroups: function() {
    var mock = require("../components/GroupSelector/mock.js");

    Socket.waitForSocketConnection(Socket.ws, function() {
      // var payload = RequestAPI.send(ActionTypes.RECEIVE_RAW_GROUPS, {"username": "thomas"});
      // Socket.ws.send(payload);
      var arr = mock.stnr();
      TeacherGroupsServerActionCreators.receiveGroups(arr);
    });
  }
};

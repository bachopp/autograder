var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");
var RequestAPI = require("./RequestAPI.js");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket = require("./Socket.js");

module.exports = {
  // TODO: ask socket for data from server
  getAllRoles: function() {

    Socket.waitForSocketConnection(Socket.ws, function() {

      var payload = RequestAPI.send(ActionTypes.RECEIVE_RAW_COURSES, {"username": "thomas"});
      // var payload = JSON.stringify({"name": "navbar", "data": {"username": "thomas"}});
      Socket.ws.send(payload);
    });
  }
};

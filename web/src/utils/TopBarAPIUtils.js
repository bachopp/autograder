var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");
var RequestAPI = require("./RequestAPI.js");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket = require("./Socket.js");

module.exports = {
  // TODO:  remove waifFor when it's fixed
  // TODO:  structurize payload better
  getAllRoles: function() {
    Socket.waitForSocketConnection(Socket.ws, function() {
      var payload = RequestAPI.send(ActionTypes.RECEIVE_RAW_ROLES, {"username": "thomas"});
      Socket.ws.send(payload);
    });
  }
};

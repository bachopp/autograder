var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");

var Socket = require("./Socket.js");

module.exports = {
  // TODO: ask socket for data from server
  getAllRoles: function() {

    Socket.waitForSocketConnection(Socket.ws, function() {
      var payload = JSON.stringify({"name": "navbar", "data": {"username": "thomas"}});
      Socket.ws.send(payload);
    });
  }
};

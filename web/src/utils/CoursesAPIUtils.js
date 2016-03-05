var CoursesServerActionCreators = require("../actions/TopBarServerActionCreators");

var Socket = require("./Socket.js");

module.exports = {
  // TODO: ask socket for data from server
  getAllCourses: function() {
    Socket.waitForSocketConnection(Socket.ws, function() {
      var payload = JSON.stringify({"name": "student", "data": {"username": "thomas"}});
      Socket.ws.send(payload);
    });
  }
};

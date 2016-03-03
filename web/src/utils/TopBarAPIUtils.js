var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");

module.exports = {
  // TODO: functions for receiving data from server
  getAllRoles: function() {
    var roles = [{Mode: "admin", Courses: [{CourseName: "DAT300", Courseid: 1},{CourseName: "DAT100", Courseid: 2}]}];
    console.log(roles);
    TopBarServerActionCreators.receiveAll(roles);
  }
};

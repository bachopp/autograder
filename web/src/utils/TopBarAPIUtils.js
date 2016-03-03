var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");

module.exports = {
  // TODO: functions for receiving data from server
  getAllRoles: function() {
    var roles = []
    TopBarServerActionCreators.receiveAll();
  }
};

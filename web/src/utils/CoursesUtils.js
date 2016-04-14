var constants = require('../constants/constants.js');
var mode = constants.mode;

module.exports = {
  // TODO: These are used in stores to convert received data from API to whatever we need

  convertRawRole: function(rawRoles) {

    var roles = [];
    for (var key in rawRoles) {
      if (key === mode.Teacher || key === mode.Student) {
        role = {Mode: key, Courses: rawRoles[key]};
        roles.push(role);
      }
    }
    return roles
  },
};

var constants = require('../constants/constants.js');

module.exports = {
  // TODO: These are used in stores to convert received data from API to whatever we need

  convertRawRole: function(rawRoles) {
    for(var student in rawRoles) {
      student["pendingTeacher"] = false;
      student["isTeacher"] = false;
    }
    return rawRoles;
  }
};

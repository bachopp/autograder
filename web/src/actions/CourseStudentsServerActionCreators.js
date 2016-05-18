var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // TODO: methods for receieveing Topbar data from server
  receiveStudents: function(rawStudents) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_STUDENTS_FOR_COURSE,
      rawStudents: rawStudents,
    });
  },
};

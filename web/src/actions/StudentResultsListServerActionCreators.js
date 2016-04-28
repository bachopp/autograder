var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // TODO: methods for receieveing Topbar data from server
  receiveAll: function(courseStudents) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_STUDENTS_FOR_COURSE,
      courseStudents: courseStudents,
    });
  },
};

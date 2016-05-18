var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // get the students for the usermanger on the teacher-panel
  receiveStudents: function(course) {
    AGDispatcher.dispatch({
      type: ActionTypes.SWITCH_COURSE,
      course: course,
    });
  },
};

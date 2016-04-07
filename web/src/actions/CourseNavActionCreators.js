var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // TODO: methods for receieveing Topbar data from server
  changeActiveCourse: function(course) {
    AGDispatcher.dispatch({
      type: ActionTypes.SWITCH_COURSE,
      course: course,
    });
  },
};

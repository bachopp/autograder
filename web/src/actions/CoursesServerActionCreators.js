var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // TODO: methods for receieveing Topbar data from server
  receiveAll: function(rawCourses) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_COURSES,
      rawCourses: rawCourses,
    });
  },
};

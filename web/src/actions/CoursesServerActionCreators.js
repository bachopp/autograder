var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // TODO: methods for receieveing topbar data from server
  receiveAll: function(newCourses) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_COURSES,
      newCourses: newCourses,
    });
  },
};

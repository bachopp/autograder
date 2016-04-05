var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // TODO: methods for receieveing Topbar data from server
  receiveModeCourses: function(modeCourses) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_COURSES_FOR_MODE,
      modeCourses: modeCourses,
    });
  },
};

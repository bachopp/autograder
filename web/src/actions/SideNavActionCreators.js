var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // TODO: methods for receieveing Topbar data from server
  changeActiveSideElement: function(element) {
    AGDispatcher.dispatch({
      type: ActionTypes.SWITCH_SIDE_NAV,
      element: element,
    });
  },
};

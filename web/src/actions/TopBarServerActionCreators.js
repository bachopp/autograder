var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawRoles) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_ROLES,
      rawRoles: rawRoles,
    });
  },
};

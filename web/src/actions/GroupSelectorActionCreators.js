var AGDispatcher = require("../dispatcher/AGDispatcher.js");
var AGConstants = require("../constants/AGConstants.js");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {

  activateGroup: function(group) {
    AGDispatcher.dispatch({
      type: ActionTypes.TOGGLE_GROUP,
      group: group,
    });
  },
};

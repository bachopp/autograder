var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {

  changeMode: function(mode) {
    AGDispatcher.dispatch({
      type: ActionTypes.SWITCH_MODE,
      mode: mode,
    });
  },
};

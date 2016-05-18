var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  receiveStudentlabs: function() {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_STUDENTLABS,
    })
  },
};

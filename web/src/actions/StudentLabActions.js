var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  getStudentLab: function(index) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_STUDENTLAB,
      lab: lab
    })
  },
};

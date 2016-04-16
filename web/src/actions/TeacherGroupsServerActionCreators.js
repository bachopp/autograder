var AGDispatcher = require("../dispatcher/AGDispatcher.js");
var AGConstants = require("../constants/AGConstants.js");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {

  receiveStudents: function(rawStudents) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_STUDENTS,
      rawStudents: rawStudents,
    });
  },
  receiveGroups: function(rawGroups) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_GROUPS,
      rawGroups: rawGroups,
    });
  },

};

var AGDispatcher = require("../dispatcher/AGDispatcher.js");
var AGConstants = require("../constants/AGConstants.js");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {

  addStudentToGroup: function(rawStudent) {
    AGDispatcher.dispatch({
      type: ActionTypes.ADD_TO_GROUP,
      rawStudent: rawStudent,
    });
    // TODO: call StudentSelectorAPI to send data to DB
  },
  searchForStudent: function(query) {
    AGDispatcher.dispatch({
        type: ActionTypes.QUERY_FOR_STUDENT,
        query: query,
    });
  },
};

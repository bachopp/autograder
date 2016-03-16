var AGDispatcher = require("../dispatcher/AGDispatcher.js");
var AGConstants = require("../constants/AGConstants.js");

var ActionTypes = AGConstants.ActionTypes;

module.exports{
  addStudentToGroup: function(student) {
    AGDispatcher.dispatch({
      type: ActionTypes.ADD_TO_GROUP,
      student: student,
    });

    // TODO: send the data to server
  }
};

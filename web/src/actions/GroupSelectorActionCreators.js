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

  addNewGroup: function() {
    AGDispatcher.dispatch({
      type: ActionTypes.ADD_NEW_GROUP,
    });
    // TODO call GroupSelectorAPI to inser group to DB
  },
  removeGroup: function(group) {
    AGDispatcher.dispatch({
      type: ActionTypes.REMOVE_GROUP,
      group: group,
    });
    // TODO call GroupSelectorAPI to release students from group update DB
  },
  removeUser: function(student, group) {
    AGDispatcher.dispatch({
      type: ActionTypes.REMOVE_STUDENT_FROM_GROUP,
      student: student,
      group: group,
    });
  }
};

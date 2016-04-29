var AGDispatcher = require("../dispatcher/AGDispatcher.js");
var AGConstants = require("../constants/AGConstants.js");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {

  addStudentToGroup: function(rawStudent) {
    AGDispatcher.dispatch({
      type: ActionTypes.ADD_TO_GROUP,
      rawStudent: rawStudent,
    });
    // TODO: call TeacherGroupsAPI to send data to DB
  },
  searchForStudent: function(query) {
    AGDispatcher.dispatch({
        type: ActionTypes.QUERY_FOR_STUDENT,
        query: query,
    });
  },

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
    // TODO call TeacherGroupsAPI to inser group to DB
  },
  removeGroup: function(group) {
    AGDispatcher.dispatch({
      type: ActionTypes.REMOVE_GROUP,
      group: group,
    });
    // TODO call TeacherGroupsAPI to release students from group update DB
  },
  removeUser: function(student, group) {
    AGDispatcher.dispatch({
      type: ActionTypes.REMOVE_STUDENT_FROM_GROUP,
      student: student,
      group: group,
    });
  },
  expandeAll: function() {
    AGDispatcher.dispatch({
      type: ActionTypes.EXPANDE_ALL_GROUPS,
    });
  },
};

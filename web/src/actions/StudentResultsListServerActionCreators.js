var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  // all the students in a course
  receiveAll: function(courseStudents) {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_STUDENTS_FOR_COURSE,
      courseStudents: courseStudents,
    });
  },
};

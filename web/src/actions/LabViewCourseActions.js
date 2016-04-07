var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

module.exports = {
  receiveStudentlabs: function() {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_STUDENTLABS,
    })
  },
  receiveStudentLab: function() {
    AGDispatcher.dispatch({
      type: ActionTypes.RECEIVE_SELECTED_LAB,
    })
  },
  setSelectedStudentLab: function(studentIndex, labIndex) {
    AGDispatcher.dispatch({
      type: ActionTypes.SET_SELECTED_STUDENTLAB,
      studentIndex: studentIndex,
      labIndex: labIndex,
    })
  },
  toggleApprovalStudentLab: function() {
    AGDispatcher.dispatch({
      type: ActionTypes.TOGGLE_APPROVAL_STUDENTLAB,
      //studentIndex: studentIndex,
      //labIndex: labIndex
    })
  },
};

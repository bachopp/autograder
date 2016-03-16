var AGConstants = require("../constants/AGConstants");

var ActionTypes = AGConstants.ActionTypes;

function _actionExists(actionType) {
  var found = false;
  for (var key in ActionTypes) {
    if (ActionTypes[key] === actionType) {
      found = true;
    }
  }
  return found;
}

module.exports = {
  send: function(actionType, payload) {
    // TODO transform to json and return
    if (_actionExists(actionType)) {
      // TODO: combine actionType and payload to JSON.stringify and return
      var jsonString = JSON.stringify({actionType: actionType, payload: payload});
      return jsonString;
    } else {
      console.error(actionType + " doesn't exist, check argument in \n" + arguments.callee.caller);
    }
  },

};

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var TopBarUtils = require('../utils/TopBarUtils');
var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _roles = [];
var _activeRole = '';

function _addRoles(rawRoles) {
  for (var key in rawRoles) {
    _roles.push(rawRoles[key]);
  }
}

var TopBarStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllRoles: function() {
    return _roles;
  },
  getActiveRole: function() {
    return _activeRole;
  }
});


TopBarStore.dispachToken = AGDispatcher.register(function(action) {

  switch(action.type) {
    // TODO: finish switch statement for different actions

     case ActionTypes.RECEIVE_RAW_ROLES:
      _addRoles(action.rawRoles);
      TopBarStore.emitChange();
      break;
    case ActionTypes.SWITCH_MODE:
      _activeRole = action.mode;
      TopBarStore.emitChange();
      break;
     default:
     // no action
  }

});

module.exports = TopBarStore;

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');
var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _activeElement = '';
var _sideElements = [];


var SideNavStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getActiveElement: function() {
    return _activeElement;
  }

});


SideNavStore.dispachToken = AGDispatcher.register(function(action) {

  switch(action.type) {
    // TODO: finish switch statement for different actions

     case ActionTypes.SWITCH_MODE:
      console.log(action.type + " from SideNavStore");
      break;
     case ActionTypes.SWITCH_SIDE_NAV:
      _activeElement = action.element;
      SideNavStore.emitChange();
      break;
     default:
     // no action
  }

});

module.exports = SideNavStore;

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// const
var constants = require('../constants/constants.js');
var mode = constants.mode;
// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');
var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _currentMode = '';
var _activeElement = '';
var _sideElements = {
  Teacher:["results","groups","users","settings","info"],
  Student:[{
    labs:[],
    grouplabs:[]
  },"members","groups","settings","info"],
  Admin:["settings", "info"],
};

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
      _currentMode = action.mode;
      if (_currentMode == mode.Teacher) {
        _activeElement = _sideElements[mode.Teacher][0];
      }

      if (_currentMode == mode.Student) {
        _activeElement = _sideElements[mode.Teacher][0];
      }
      if (_currentMode == mode.Admin) {
        _activeElement = mode.Admin;
      }
      SideNavStore.emitChange();
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

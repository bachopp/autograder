var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _roles = [];

function _addRoles(rawRoles) {
  _roles = rawRoles;
}

var CoursesStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllCourses: function() {
    return _roles;
  }
});


CoursesStore.dispachToken = AGDispatcher.register(function(action) {

  switch(action.type) {
    // TODO: finish switch statement for different actions

     case ActionTypes.RECEIVE_RAW_ROLES:
      _addRoles(action.rawRoles);
      CoursesStore.emitChange();

     default:
     // no action
  }

});

module.exports = CoursesStore;

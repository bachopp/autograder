var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _usersCourses = {admin:["DAT100", "DAT200"], teacher:["DAT200", "DAT510", "DAT543","DAT204", "DAT134", "DAT541"], student: ["DAT120"]};

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

  getCoursesForUser: function(mode) {

    return _usersCourses[mode];
  }
});


TopBarStore.dispachToken = AGDispatcher.register(function(action) {

  switch(action.type) {
    // TODO: finish switch statement for different actions

     case ActionTypes.RECEIVE_USER_MODE_COURSES:
      TopBarStore.emitChange();
      break;
     default:
     // no action
      return;
  }

});

module.exports = TopBarStore;

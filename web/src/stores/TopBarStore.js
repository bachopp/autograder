var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// constants
var constants = require('../constants/constants.js');
var mode = constants.mode;

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var TopBarUtils = require('../utils/TopBarUtils');
var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = 'change';


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


});


TopBarStore.dispachToken = AGDispatcher.register(function(action) {


});

module.exports = TopBarStore;

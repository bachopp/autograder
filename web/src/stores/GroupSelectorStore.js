var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// local
var AGDispatcher = require('../dispatcher/AGDispatcher');
var AGConstants = require('../constants/AGConstants.js');

var TopBarUtils = require('../utils/TopBarUtils.js');
var GroupSelectorUtils = require('../utils/GroupSelectorUtils.js')

var ActionTypes = AGConstants.ActionTypes;


var CHANGE_EVENT = 'change';

var _groups = [];

function _removeGroup(group) {
  // TODO: remove group
  console.log(group);
}

function _addGroup() {
  var len = _groups.length + 1;
  var newGroup = {name:"group_"+ len, number: len, users:[]};
  _groups.push(newGroup);
}

function _setOneGroupActive(group) {
  _groups.forEach(function(grp) {
    if (grp === group) {
      grp.active = true;
    } else {
      grp.active = false;
    }
  });
}

function _addStudentToActiveGroup(student) {
  _groups.forEach(function(grp) {
    if (grp.active) {
      grp.users.push(student);
    }
  });
}

function _newGroups(newGroups) {
  _groups = newGroups;
}

var GroupSelectorStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllGroups: function() {
    return _groups;
  }
});

GroupSelectorStore.dispachToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    // TODO: finish switch statement for different actions
    case ActionTypes.RECEIVE_RAW_GROUPS:
    _newGroups(action.rawGroups);
    GroupSelectorStore.emitChange();
    break;
    case ActionTypes.TOGGLE_GROUP:
      _setOneGroupActive(action.group);
      GroupSelectorStore.emitChange();
      break;
    case ActionTypes.ADD_TO_GROUP:
      _addStudentToActiveGroup(action.rawStudent);
      GroupSelectorStore.emitChange();
      break;
    case ActionTypes.ADD_NEW_GROUP:
      _addGroup();
      GroupSelectorStore.emitChange();
      break;
    default:
     // no action
  }

});

module.exports = GroupSelectorStore;

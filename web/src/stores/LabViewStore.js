var React = require("react");
var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var mockData = require("./mockData.js");

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = "change";

var _selectedStudentIndex = 1;    // default 0 - first student
var _selectedLabIndex = 2;        // default 0 - first lab of student 0

_students = mockData.students;    // from the mockData.js file

function getStudentLabs() {
  return _students;
}

function getSelectedStudentLab() {
  return _students[_selectedStudentIndex].labs[_selectedLabIndex];
}

var LabViewStore = assign({},EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT,callback);
  },
  getStudentLabs: function() {
    return _students;
  },
  getSelectedStudentLab: function() {
    return getSelectedStudentLab();
  },
});
LabViewStore.dispatchToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.RECEIVE_RAW_STUDENTLABS:
      getStudentLabs();
      LabViewStore.emitChange();
      break;
    case ActionTypes.RECEIVE_SELECTED_LAB:
      getSelectedStudentLab();
      LabViewStore.emitChange();
      break;
    default:
      // do nothing here
  }
});

module.exports = LabViewStore;

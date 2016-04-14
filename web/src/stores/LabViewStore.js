var React = require("react");
var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var mockData = require("./mockData.js");

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = "change";

var _selectedStudId = 0;
var _selectedLabId = 0;

var allStudents = mockData.students;
var selectedStudents = allStudents;   // default all students are selected

function resetStudents() {
  console.log("--RESET STUDENTLIST");
  selectedStudents = allStudents;
}

function queryStudents(query) {
  resetStudents();
  if(!query) return;
  _queryResult = [];
  _localStudents = selectedStudents;
  query = query.toLowerCase();
  _localStudents.forEach(function(cStud) {
    var uname = cStud.username.toLowerCase().search(query);
    var fname = cStud.firstName.toLowerCase().search(query);
    var lname = cStud.lastName.toLowerCase().search(query);

    (uname>=0 || fname>= 0 || lname>=0) ? _queryResult.push(cStud) : 0;
  });

  if(_queryResult.length == 0) {
    return false;
  } else {
    return _queryResult;
  }
}

function getStudentLabs() {
  return selectedStudents;
}
function getSelectedStudentLab() {
  return selectedStudents[_selectedStudId].labs[_selectedLabId];
}
/*
  TODO: When the _selectedXX is not in the list,
  the first list-item should be set as active

  -- this is to prevent bugs when searching for students
  and the selected student is not in the queried group
*/
function updateStudentList(newList) {
  for(var i = 0; i<newList.length; i++){
    if(newList[i] == selectedStudents[_selectedStudId]) {
      // the currently selected student is in the search
    } else {
      // else - the selected lab will be set to the searches queryResults[0].labs[0]
      _selectedStudId = 0;
      _selectedLabId = 0;
    }
  }
  selectedStudents = newList;
}

function setSelectedStudentLab(studentIndex,labIndex) {
  selectedStudents[_selectedStudId].labs[_selectedLabId].isSelected = false;
  _selectedStudId = studentIndex;
  _selectedLabId = labIndex;

  selectedStudents[studentIndex].labs[labIndex].isSelected = true;
}

function toggleSelectedLab() {
  selectedStudents[_selectedStudId].labs[_selectedLabId].approved = !selectedStudents[_selectedStudId].labs[_selectedLabId].approved;
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
    return getStudentLabs();
  },
  getSelectedStudent: function() {
    return getStudentLabs()[_selectedStudId];
  },
  getSelectedStudentLab: function() {
    return getSelectedStudentLab();
  }
});
LabViewStore.dispatchToken = AGDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.SET_SELECTED_STUDENTLAB:
      setSelectedStudentLab(action.studentIndex, action.labIndex);
      LabViewStore.emitChange();
      break;
    case ActionTypes.TOGGLE_APPROVAL_STUDENTLAB:
      toggleSelectedLab();
      LabViewStore.emitChange();
      break;
    case ActionTypes.SEARCH_FOR_STUDENT:
      var keep = queryStudents(action.query);
      if(keep) {
        updateStudentList(keep);
        LabViewStore.emitChange();
        updateStudentList(keep);
      } else {
        updateStudentList([]);    // returns empty array if no results on search
        LabViewStore.emitChange();
      }
      break;
    default:
      // do nothing here
  }
});

module.exports = LabViewStore;

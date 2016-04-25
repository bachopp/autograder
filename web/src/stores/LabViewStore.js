var React = require("react");
var AGDispatcher = require("../dispatcher/AGDispatcher");
var AGConstants = require("../constants/AGConstants");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var StudentlistAPI = require("../utils/StudentlistAPI.js");
var mockData = require("../components/StudentResultsList/mockData.js");

var ActionTypes = AGConstants.ActionTypes;

var CHANGE_EVENT = "change";
var logExpanded = false;

var allStudents = mockData.students;
var selectedStudents = allStudents;   // default all students are selected
var selectedStudId = 0;
var selectedLabId = 0;
selectedStudents[selectedStudId].labs[selectedLabId].isSelected = true;

function toggleLabExpand() {
  logExpanded = !logExpanded;
}

function resetStudents() {
  selectedStudents = allStudents;
}

function queryStudents(query) {
  if(query.length == 0 || query == "" || query == " ") {
    return false;
  }
  queryResults = [];
  fullSList = selectedStudents;
  query = query.toLowerCase();

  fullSList.forEach(function(cStud) {
    var uname = cStud.username.toLowerCase().search(query);
    var fname = cStud.firstName.toLowerCase().search(query);
    var lname = cStud.lastName.toLowerCase().search(query);

    if(uname >= 0 || fname >= 0 || lname >= 0) {
      queryResults.push(cStud);
    }
  });

  return queryResults;

}

function getStudentLabs() {
  return selectedStudents;
}
function getSelectedStudentLab() {
  if(selectedStudents.length == 0) {
    return false;
  } else {
    return selectedStudents[selectedStudId].labs[selectedLabId];
  }
}

function updateStudentList(newList) {
  for(var i = 0; i<newList.length; i++){
    if(!newList[1] == selectedStudents[selectedStudId]) {
      selectedStudId = 0;
      selectedLabId = 0;
    }
  }
  selectedStudents = newList;
}

function setSelectedStudentLab(sIndex,lIndex) {
  selectedStudents[selectedStudId].labs[selectedLabId].isSelected = false;
  selectedStudId = sIndex;
  selectedLabId = lIndex;
  selectedStudents[sIndex].labs[lIndex].isSelected = true;
}

function toggleSelectedLab() {
  selectedStudents[selectedStudId].labs[selectedLabId].approved = !selectedStudents[selectedStudId].labs[selectedLabId].approved;
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
  getExpandedStatus: function() {
    return logExpanded;
  },
  getStudentLabs: function() {
    return getStudentLabs();
  },
  getSelectedStudent: function() {
    return getStudentLabs()[selectedStudId];
  },
  getSelectedStudentLab: function() {
    var lab = getSelectedStudentLab();
    if(lab) {
      return lab;
    } else {
      return [];
    }
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
    case ActionTypes.TOGGLE_LAB_EXPAND:
      toggleLabExpand();
      LabViewStore.emitChange();
      break;
    case ActionTypes.SEARCH_FOR_STUDENT:
      
      var keep = queryStudents(action.query);
      if(keep) {
        updateStudentList(keep);
        LabViewStore.emitChange();
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

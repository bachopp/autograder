var constants = require('../constants/constants.js');
var mode = constants.mode;

var LabGenerator = require("../stores/LabGenerator.js");

var Student = function() {
  this.id = null;
  this.username = "";
  this.firstName = "";
  this.lastName = "";
  this.studentNumber = "";
  this.slipDays = null;
  this.hasGroup = false;
  this.labs = LabGenerator.generate(5);
}

module.exports = {
  convertRoles: function(rawList) {
    // list empty ? return empty
    if(!rawList || rawList.length == 0 || rawList == undefined) {
      return [];
    }
    _newList = [];
    for(var i = 0; i<rawList.length; i++) {
      var current = rawList[i];
      var s = new Student();
      s.id = current.ID-2;               // HOT FIXING
      s.username = current.Github;
      s.firstName = current.FirstName;
      s.lastName = current.LastName;
      s.studentNumber = 223344;
      s.slipDays = 6;
      s.hasGroup = false;
      _newList.push(s);
    }
    return _newList;
  }
};

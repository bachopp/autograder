var constants = require('../constants/constants.js');
var mode = constants.mode;

var Student = function() {
  this.id = null;
  this.username = "";
  this.firstName = "";
  this.lastName = "";
  this.studentNumber = "";
  this.slipDays = null;
  this.hasGroup = false;
  this.labs = [
    {
      id: 0,
      title: "Lab 1",
      approved: false,
      log: [
        "1: Running program",
        "2: Running helloworld.go, =====> 100%",
        "3: Testing helloworld.go, =====> 100%",
        "4: TEST1: 100%",
        "5: TEST2: 100%",
        "6: TESTS PASSED",
        "7. Bigger labs",
        "8. Longer logs",
        "9. What next?",
        "10. You decide",
        "11. ...",
        "12. 100200100",
        "13. LAB PASSED"
      ],
      percent: 100,
      isSelected: false
    },{
      id: 0,
      title: "Lab 2",
      approved: true,
      log: ["The build log comes here"],
      percent: 70,
      isSelected: false
    },{
      id: 0,
      title: "Lab 3",
      approved: false,
      log: ["The build log comes here"],
      percent: 30,
      isSelected: false
    },{
      id: 0,
      title: "Lab 4",
      approved: false,
      log: ["The build log comes here"],
      percent: 65,
      isSelected: false
    },{
      id: 0,
      title: "Lab 5",
      approved: true,
      log: ["The build log comes here"],
      percent: 65,
      isSelected: false
    }
  ];
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

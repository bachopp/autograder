var lab1 = {
  title: "Lab 1",
  approved: true,
  log: ["The build log comes here"],
  percent: 65
}
var lab2 = {
  title: "Lab 2",
  approved: false,
  log: ["The build log comes here"],
  percent: 30
}
var lab3 = {
  title: "Lab 3",
  approved: false,
  log: ["The build log comes here"],
  percent: 20
}
var lab4 = {
  title: "Lab 4",
  approved: false,
  log: ["The build log comes here"],
  percent: 15
}
var lab5 = {
  title: "Lab 5",
  approved: false,
  log: ["The build log comes here"],
  percent: 100
}
var lab6 = {
  title: "Lab 6",
  approved: false,
  log: ["The build log comes here"],
  percent: 95
}
var mockLabs = [];
mockLabs.push(lab1,lab2,lab3,lab4,lab5,lab6);

var test1 = {username:"Thomas", firstName: "Thomas", lastName: "Darvik", studentNumber:  12340, slipDays: 5, hasGroup: false, labs: mockLabs};
var test2 = {username:"tokams", firstName: "Pål", lastName: "Andersen", studentNumber:  223344, slipDays: 4, hasGroup: false, labs: mockLabs};
var test3 = {username:"thommy", firstName: "Tomasz", lastName: "Glienieki", studentNumber:  22341, slipDays: 2, hasGroup: false, labs: mockLabs};
var test4 = {username:"andre", firstName: "Andreas", lastName: "Polksi", studentNumber:  574214, slipDays: 2, hasGroup: false, labs: mockLabs};
var test5 = {username:"thommytass", firstName: "Thomas", lastName: "H. Fauske", studentNumber:  223344, slipDays: 0, hasGroup: false, labs: mockLabs};

var MockData = {
  title: "Mockdata from mockdata.js",
  students: []
}

MockData.students.push(test1,test2,test3,test4,test5);

module.exports = MockData;

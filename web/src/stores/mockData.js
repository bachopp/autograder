var lab1 = {
  id: 0,
  title: "Lab 1",
  approved: true,
  log: ["The build log comes here"],
  percent: 65
}
var lab2 = {
  id: 1,
  title: "Lab 2",
  approved: false,
  log: ["The build log comes here"],
  percent: 30
}
var lab3 = {
  id: 2,
  title: "Lab 3",
  approved: false,
  log: ["The build log comes here"],
  percent: 20
}
var lab4 = {
  id: 3,
  title: "Lab 4",
  approved: false,
  log: ["The build log comes here"],
  percent: 15
}
var lab5 = {  
  id: 4,
  title: "Lab 5",
  approved: false,
  log: ["The build log comes here"],
  percent: 100
}
var lab6 = {
  id: 5,
  title: "Lab 6",
  approved: false,
  log: ["The build log comes here"],
  percent: 95
}
var mockLabs1 = [];
var mockLabs2 = [];
var mockLabs3 = [];
mockLabs1.push(lab1,lab2,lab3,lab4,lab5,lab6);
mockLabs2.push(lab6,lab4,lab5,lab3,lab2,lab1);
mockLabs3.push(lab3,lab4,lab2,lab1,lab3,lab6);

var test1 = {id: 0, username:"Thomas", firstName: "Thomas", lastName: "Darvik", studentNumber:  12340, slipDays: 5, hasGroup: false, labs: mockLabs1};
var test2 = {id: 1, username:"tokams", firstName: "Pål", lastName: "Andersen", studentNumber:  223344, slipDays: 4, hasGroup: false, labs: mockLabs2};
var test3 = {id: 2, username:"thommy", firstName: "Tomasz", lastName: "Glienieki", studentNumber:  22341, slipDays: 2, hasGroup: false, labs: mockLabs3};
var test4 = {id: 3, username:"andre", firstName: "Andreas", lastName: "Polksi", studentNumber:  574214, slipDays: 2, hasGroup: false, labs: mockLabs1};
var test5 = {id: 4, username:"thommytass", firstName: "Thomas", lastName: "H. Fauske", studentNumber:  223344, slipDays: 0, hasGroup: false, labs: mockLabs3};

var MockData = {
  title: "Mockdata from mockdata.js",
  students: []
}

MockData.students.push(test1,test2,test3,test4,test5);

module.exports = MockData;

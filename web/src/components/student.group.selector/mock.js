// var TeacherGroupServerActionCreators = require("../../actions/TeacherGroupServerActionCreators.js");
module.exports = {
  stnr: function() {
    var arr = [];
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  12345};
    arr.push(test);
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  12346};
    arr.push(test);
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  12347};
    arr.push(test);
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  12348};
    arr.push(test);
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  12349};
    arr.push(test);
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  12340};
    arr.push(test);
    return arr;
    // TeacherGroupServerActionCreators.receiveStudents(arr);
  },
}

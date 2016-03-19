// var TeacherGroupServerActionCreators = require("../../actions/TeacherGroupServerActionCreators.js");
module.exports = {
  stnr: function() {
    var arr = [];
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  12345};
    arr.push(test);
    var test = {username:"impartial", firstName: "Zbigniew", lastName: "Wodecki", studentNumber:  12346};
    arr.push(test);
    var test = {username:"zombie", firstName: "Kasia", lastName: "Malijewska", studentNumber:  12347};
    arr.push(test);
    var test = {username:"kalisi", firstName: "Ule", lastName: "Usse", studentNumber:  12348};
    arr.push(test);
    var test = {username:"majosn", firstName: "Ole", lastName: "Harrison", studentNumber:  12349};
    arr.push(test);
    var test = {username:"tokems", firstName: "Thomas", lastName: "Glienieki", studentNumber:  12340};
    arr.push(test);
    return arr;
    // TeacherGroupServerActionCreators.receiveStudents(arr);
  },
}

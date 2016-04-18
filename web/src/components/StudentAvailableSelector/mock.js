// var TeacherGroupsServerActionCreators = require("../../actions/TeacherGroupsServerActionCreators.js");
module.exports = {
  stnr: function() {
    var arr = [];
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  12345, hasGroup: false};
    arr.push(test);
    var test = {username:"impartial", firstName: "Zbigniew", lastName: "Wodecki", studentNumber:  12346, hasGroup: false};
    arr.push(test);
    var test = {username:"zombie", firstName: "Kasia", lastName: "Malijewska", studentNumber:  12347, hasGroup: false};
    arr.push(test);
    var test = {username:"kalisi", firstName: "Ule", lastName: "Usse", studentNumber:  12348, hasGroup: false};
    arr.push(test);
    var test = {username:"majosn", firstName: "Ole", lastName: "Harrison", studentNumber:  12349, hasGroup: false};
    arr.push(test);
    var test = {username:"tokems", firstName: "Thomas", lastName: "Glienieki", studentNumber:  12340, hasGroup: false};
    arr.push(test);
    return arr;
    // TeacherGroupsServerActionCreators.receiveStudents(arr);
  },
}

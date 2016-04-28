var constants = require('../constants/constants.js');
var mode = constants.mode;
module.exports = {
  // TODO: These are used in stores to convert received data from API to whatever we need
  convertStudents: function(rawStudents) {
    var i = 0;
    var students = [];
    rawStudents.forEach(function(rawStud) {
      var stud = {};
      stud.firstName = rawStud.FirstName;
      stud.lastName = rawStud.LastName;
      stud.hasGroup = false;
      stud.username = rawStud.Github;
      stud.studentNumber = i++;
      students.push(stud);
    });
    return students;
  },
}

var React = require("react");
var PropTypes = React.PropTypes;
var Col = require("react-bootstrap").Col;
//var LabViewCourseActionCreators = require("../../actions/LabViewCourseActionCreators.js");

//var StudentElement = require("./StudentElement.jsx");

var UserRow = React.createClass({
  PropTypes: {
    student: PropTypes.object.isRequired,
  },
  handleClick: function(index) {
    // handling click of buttons (checkmarks)
    //LabViewCourseActionCreators.setSelectedStudentLab(studentId,labId);
  },
  render: function() {
  var student = this.props.student;
  var self = this;

  var isAdmin = student.isAdmin;
  var isTeacher = student.Teacher.IsTeacher;
  var isStudent = student.Student.IsStudent;

  checkmarkAdmin= isAdmin ? "Yes" : "No";
  checkmarkTeacher= isTeacher ? "Yes" : "No";
  checkmarkStudent= isStudent ? "Yes" : "No";

  return(
      <tr className="border_bottom">
        <td>{student.FirstName} {student.LastName}</td>
        <td>{checkmarkStudent}</td>
        <td>{checkmarkTeacher}</td>
        <td>{checkmarkAdmin}</td>
      </tr>
    );
  }
});

module.exports = UserRow;

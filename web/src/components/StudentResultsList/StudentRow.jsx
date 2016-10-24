var React = require("react");
var PropTypes = React.PropTypes;
var Col = require("react-bootstrap").Col;
var LabViewCourseActionCreators = require("../../actions/LabViewCourseActionCreators.js");

var StudentElement = require("./StudentElement.jsx");

var StudentRow = React.createClass({
  PropTypes: {
    student: PropTypes.object.isRequired,
  },
  handleClick: function(index) {
    var studentId = this.props.student.id;
    LabViewCourseActionCreators.setSelectedStudentLab(studentId,index);
  },
  render: function() {
  var self = this;
  var cStudent = this.props.student;
  return(
      <tr className="border_bottom">
        <td>{cStudent.firstName} {cStudent.lastName}</td>
        <td>{cStudent.slipDays}</td>
        {cStudent.labs.map(function(lab, index) {
          return <StudentElement
            lab={lab}
            key={"labIndexStudent" + cStudent.firstName + index}
            onClick={self.handleClick.bind(this, index)}
          />
        },this)}
      </tr>
    );
  }
});

module.exports = StudentRow;

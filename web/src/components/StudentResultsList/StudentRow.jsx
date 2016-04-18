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
    var labId = index;
    LabViewCourseActionCreators.setSelectedStudentLab(studentId,labId);
  },
  render: function() {
  var _student = this.props.student;
  var self = this;

  return(
      <tr className="border_bottom">
        <td>{_student.firstName} {_student.lastName}</td>
        <td>{_student.slipDays}</td>
        {_student.labs.map(function(currentLab, index) {
          var eventClick = this.handleClick.bind(null,index);
          return <StudentElement onClick={eventClick} key={"sElement"+index} lab={currentLab}/>
        },this)}
      </tr>
    );
  }
});

module.exports = StudentRow;

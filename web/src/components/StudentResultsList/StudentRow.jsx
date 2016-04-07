var React = require("react");
var PropTypes = React.PropTypes;
var Col = require("react-bootstrap").Col;
var LabViewCourseActions = require("../../actions/LabViewCourseActions.js");

var StudentElement = require("./StudentElement.jsx");

var StudentRow = React.createClass({
  PropTypes: {
    student: PropTypes.object
  },
  getInitialState: function() {
    return {
      student: this.props.student,
      isSelected: this.props.isSelected,
      selectedLab: this.props.selectedLab,
    }
  },
  handleClick: function(labIndex) {
    _studentIndex = this.state.student.id;
    _labIndex = labIndex;
    LabViewCourseActions.setSelectedStudentLab(_studentIndex,_labIndex);
  },
  render: function() {
    var student = this.state.student;
    var labs = student.labs;
    var studentId = student.id;

    // the current element is the selected one
    if(!this.state.selectedLab) {

    }
    return(
      <tr>
        <td>{student.firstName} {student.lastName}</td>
        <td>{student.slipDays}</td>
        {labs.map(function(lab,index){
          var boundClick = this.handleClick.bind(null,index);
          return <StudentElement class={"hello"} onClick={boundClick} key={"studentElement" + index} studentId={studentId} lab={lab}/>
        },this)}
      </tr>
    );
  }
});

module.exports = StudentRow;

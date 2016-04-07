var React = require("react");
var PropTypes = React.PropTypes;
var Col = require("react-bootstrap").Col;
var LabViewCourseActions = require("../../actions/LabViewCourseActions.js");

var StudentElement = require("./StudentElement.jsx");

var StudentRow = React.createClass({
  PropTypes: {
    student: PropTypes.object.isRequired,
    selected: PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return {
      student: this.props.student,
      isSelected: this.props.isSelected,
      selectedLab: this.props.selectedLab,
    }
  },
  handleClick: function(index) {
    console.log(index);

    _studentIndex = this.state.student.id;
    _labIndex = index;
    LabViewCourseActions.setSelectedStudentLab(_studentIndex,_labIndex);
  },
  render: function() {

    var student = this.state.student;
    var labs = student.labs;

    return(
      <tr>
        <td>{student.firstName} {student.lastName}</td>
        <td>{student.slipDays}</td>
        {labs.map(function(lab,index){
          var boundClick = this.handleClick.bind(null,index);
          console.log("hello");
          return <StudentElement class={"hello"} onClick={boundClick} key={"studentElement" + index} lab={lab}/>
        },this)}
      </tr>
    );
  }
});

module.exports = StudentRow;

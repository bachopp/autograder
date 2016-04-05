var React = require("react");
var PropTypes = React.PropTypes;
var Col = require("react-bootstrap").Col;

var StudentElement = require("./StudentElement.jsx");

var StudentRow = React.createClass({
  PropTypes: {
    student: PropTypes.object
  },
  getInitialState: function() {
    return {
      student: this.props.student
    }
  },
  render: function() {
    var student = this.state.student;
    var labs = student.labs;
    var studentId = student.id;
    return(
      <tr>
        <td>{student.firstName} {student.lastName}</td>
        <td>{student.slipDays}</td>
        {labs.map(function(lab,index){
          return <StudentElement key={"studentElement" + index} studentId={studentId} lab={lab}/>
        })}
      </tr>
    );
  }
});

module.exports = StudentRow;

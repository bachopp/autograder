var React = require("react");
var Button = require("react-bootstrap").Button;
var PropTypes = React.PropTypes;


var UserRow = React.createClass({
  propTypes: {
    student: React.PropTypes.object.isRequired
  },
  render: function() {
    var student = this.props.student;

    return(
      <tr>
        <td>{student.FirstName} {student.LastName}</td>
        <td>{student.ID}</td>
        <td>
          <Button bsStyle="info">Yes</Button>
        </td>
        <td>
          <Button bsStyle="default">No</Button>
        </td>
        <td>
          <Button bsStyle="danger">Remove</Button>
        </td>
      </tr>
    );
  }
});



module.exports = UserRow;

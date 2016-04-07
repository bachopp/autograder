var React = require("react");
var Col = require("react-bootstrap").Col;

var PropTypes = React.PropTypes;

var StudentElement = React.createClass({

  getInitialState: function() {
    return {
      lab: this.props.lab,
      studentId: this.props.studentId,
      class: this.props.class
    }
  },
  _onChange: function() {

  },
  render: function() {
    var percent = this.state.lab.percent;
    return(
      <td className="labView" onClick={this.props.onClick}>
        <Col className="labTableButton" xs={2}>{percent}%</Col>
      </td>
    );
  }
});

module.exports = StudentElement;

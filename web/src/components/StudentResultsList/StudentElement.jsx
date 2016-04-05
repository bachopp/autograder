var React = require("react");
var Col = require("react-bootstrap").Col;

var StudentElement = React.createClass({
  getInitialState: function() {
    return {
      lab: this.props.lab,
      studentId: this.props.studentId
    }
  },
  _handleClick: function() {
    console.log(this.state.studentId + " : " + this.state.lab.id);
  },
  render: function() {
    var percent = this.state.lab.percent;
    return(
      <td className="labview" onClick={this._handleClick}>
        <Col className="labTableButton" xs={2}>{percent}%</Col>
      </td>
    );
  }
});

module.exports = StudentElement;

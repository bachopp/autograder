var React = require("react");
var Col = require("react-bootstrap").Col;

var StudentElement = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.text
    }
  },
  render: function() {
    var text = this.state.text;
    return(
      <td className="labview">
        <Col className="labTableButton" xs={2}>{text}%</Col>
      </td>
    );
  }
});

module.exports = StudentElement;

var React = require("react");
var Col = require("react-bootstrap").Col;

var PropTypes = React.PropTypes;

var StudentElement = React.createClass({

  propTypes: {
    lab: PropTypes.object.isRequired,
  },
  _onChange: function() {

  },
  render: function() {
    var lab = this.props.lab;
    var self = this;

    if(lab.isSelected) {
      classname = "labviewSelected";
    } else {
      classname = "labview";
    }

    return(
      <td className={classname} onClick={this.props.onClick}>
        <Col className="labTableButton" xs={2}>{lab.percent}%</Col>
      </td>
    );
  }
});

module.exports = StudentElement;

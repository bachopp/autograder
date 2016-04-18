var React = require("react");
var Col = require("react-bootstrap").Col;

var PropTypes = React.PropTypes;

var StudentElement = React.createClass({

  propTypes: {
    lab: PropTypes.object.isRequired,
  },
  render: function() {
    var lab = this.props.lab;
    var self = this;
    var classname = "";

    if(lab.isSelected) {
      classname += "selected ";
    } else {
      classname += "notSelected ";
    }

    if(lab.approved) {
      classname += "approved ";
    } else {
      classname += "notApproved ";
    }

    return(
      <td className={"labview " + classname} onClick={this.props.onClick}>
        {lab.percent}%
      </td>
    );
  }
});

module.exports = StudentElement;

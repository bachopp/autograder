var React = require("react");

// React components
var ProgressBar = require("react-bootstrap").ProgressBar;

var Statusbar = React.createClass({
  render: function() {
    var percent = this.props.percent;
    if(percent < 60) {
      approved = 0;
      bsStyle = "danger";
    } else if(percent >= 60) {
      approved = 1;
      bsStyle = "success";
    }
    return(
      <ProgressBar striped bsStyle={bsStyle} now={percent} label="%(percent)s%"/>
    );
  }
});

module.exports = Statusbar;

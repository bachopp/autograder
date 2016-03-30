var React = require("react");

// React components
var ProgressBar = require("react-bootstrap").ProgressBar;

var Statusbar = React.createClass({
  render: function() {
    var approvePercent = 60;      // get this from settings
    var percent = this.props.percent;
    if(percent < approvePercent) {
      approved = 0;
      bsStyle = "danger";
    } else if(percent >= approvePercent) {
      approved = 1;
      bsStyle = "success";
    }
    return(
      <ProgressBar striped active bsStyle={bsStyle} now={percent} label="%(percent)s%"/>
    );
  }
});

module.exports = Statusbar;

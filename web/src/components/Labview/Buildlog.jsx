var React = require("react");
var Col = require("react-bootstrap").Col;
var Well = require("react-bootstrap").Well;

var PropTypes = React.PropTypes;

/*
The build log take is an array (line-by-line) and prints it with an ID attached to it.
This might be changed if the build log comes in another format later
*/
var Buildlog = React.createClass({
  render: function() {

    var log = this.props.log;
    var theLog = [];

    if(this.props.isExpanded) {
      theLog = this.props.log;
    } else {
      theLog = this.props.log.slice(log.length/2,log.length);
    }
    return(
      <Well className="buildLog">
        {theLog.map(function(entry, index) {
          return(
            <p key={"point" + index}>{index+1}. {entry}</p>
          );
        })}
      </Well>
    );
  }
});

module.exports = Buildlog;

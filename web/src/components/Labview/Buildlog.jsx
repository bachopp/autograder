var React = require("react");
var Col = require("react-bootstrap").Col;
var Well = require("react-bootstrap").Well;

var PropTypes = React.PropTypes;


/*
The build log take is an array (line-by-line) and prints it with an ID attached to it.
This might be changed if the build log comes in another format later
*/
var Buildlog = React.createClass({
  propTypes: {
    log: React.PropTypes.array.isRequired
  },
  render: function() {
    return(
      <Well className="buildLog">
        {this.props.log.map(function(entry, index) {
          return(
            <p key={"point" + index}>{entry}</p>
          );
        })}
      </Well>
    );
  }
});

module.exports = Buildlog;

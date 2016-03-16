var React = require("react");
var Col = require("react-bootstrap").Col;
var Well = require("react-bootstrap").Well;
var Buildlog = React.createClass({
  getInitialState: function() {
    return {
      log: this.props.log
    }
  },
  render: function() {
    console.log(this.props.log);
    return(
      <Well className="buildLog">
        {this.state.log.map(function(entry, index) {
          return(
            <p>{entry.id}{entry.text}</p>
          );
        })}
      </Well>
    );
  }
});

module.exports = Buildlog;

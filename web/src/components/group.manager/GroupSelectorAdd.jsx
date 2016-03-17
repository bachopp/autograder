var React = require("react");

// react-router

// bootstrap
var Button = require("react-bootstrap").Button;
// local

// this className

var GroupSelectorAdd = React.createClass({

  handleClick: function() {
    console.log("add group");
  },

  render: function() {

    return (
        <Button className="groupselectoradd" block onClick={this.handleClick}>+</Button>
    );
  }
});

module.exports = GroupSelectorAdd;

var React = require("react");

// react-router

// bootstrap
var Button = require("react-bootstrap").Button;
// local

// this className

var GroupSelectorAdd = React.createClass({

  propTypes: {
    addNewGroup: React.PropTypes.func.isRequired,
  },

  render: function() {

    var addNewGroup = this.props.addNewGroup;

    return (
        <Button className="groupselectoradd" block onClick={addNewGroup}>+</Button>
    );
  }
});

module.exports = GroupSelectorAdd;

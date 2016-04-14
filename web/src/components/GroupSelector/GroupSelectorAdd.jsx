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
    const addGroupIcon = <i className="fa fa-plus"></i>;

    var addNewGroup = this.props.addNewGroup;

    return (
        <Button onClick={addNewGroup}>New {addGroupIcon}</Button>
    );
  }
});

module.exports = GroupSelectorAdd;

// TODO: impement group buttor, when active it expands and displays the students that are in the group

var React = require("react");

// react-router

// bootstrap
var PanelGroup = require("react-bootstrap").PanelGroup;
var Panel = require("react-bootstrap").Panel;
var Button = require("react-bootstrap").Button;
// local
var GroupSelectorAdd = require("./GroupSelectorAdd.jsx");
// this className

var GroupSelectorElement = React.createClass({

  propTypes: {
    activeGroup: React.PropTypes.bool,
  },

  getInitialState: function() {
    return {
      activeGroup: false
    };
  },

  handleClick: function() {
    this.setState({activeGroup: !this.state.activeGroup});
  },


  render: function() {
    activeGroup = this.props.activeGroup;
    return (

      <div>
        <Button onClick={this.handleClick} block>
          Group 1
        </Button>
        <Panel collapsible expanded={this.state.activeGroup}>
          Group 1 users
        </Panel>
      </div>

    );
  }
});

module.exports = GroupSelectorElement;

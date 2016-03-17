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
    user: React.PropTypes.object.isRequired,
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
    var activeGroup = this.props.activeGroup;
    var user = this.props.user;
    return (
      <div>
        <Button onClick={this.handleClick} block>
          Group 1
        </Button>
        <Panel className="groupselectorelement" collapsible expanded={this.state.activeGroup}>
          <Button block>{user.firstName} {user.studentNumber}</Button>
        </Panel>
      </div>

    );
  }
});

module.exports = GroupSelectorElement;

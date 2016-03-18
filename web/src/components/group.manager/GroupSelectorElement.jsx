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
    group: React.PropTypes.object.isRequired,
    activeGroup: React.PropTypes.bool,
  },

  getInitialState: function() {
    return {
      activeGroup: false
    };
  },


  render: function() {
    var activeGroup = this.props.activeGroup;
    var group = this.props.group;
    var users = group.users;
    var self = this;
    return (
      <div>
      {
        users.map(function(user) {
          return (
            <Button block  key={user.studentNumber}>
              {user.firstName} {user.studentNumber}
            </Button>
          );
        })
      }
      </div>
    );
  }
});

module.exports = GroupSelectorElement;

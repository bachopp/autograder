// TODO: impement group buttor, when active it expands and displays the students that are in the group

var React = require("react");

// react-router

// bootstrap
var PanelGroup = require("react-bootstrap").PanelGroup;
var Panel = require("react-bootstrap").Panel;
var Button = require("react-bootstrap").Button;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
// local
var GroupSelectorAdd = require("./GroupSelectorAdd.jsx");

// actions
var GroupSelectorActionCreators = require("../../actions/GroupSelectorActionCreators.js");

// this className

var GroupSelectorElement = React.createClass({

  propTypes: {
    group: React.PropTypes.object.isRequired,
    activeGroup: React.PropTypes.bool,
    elementClass: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return {
      activeGroup: false
    };
  },

  removeUser: function(user, group) {
    GroupSelectorActionCreators.removeUser(user, group);
    // this.props.removeUser(user, group);
  },

  render: function() {
    const removeUserIcon = <i className="groupmanagericons fa fa-times fa-fw fa-lg fa-border"></i>;

    var elementClass = "groupelement " + this.props.elementClass;
    var activeGroup = this.props.activeGroup;
    var group = this.props.group;
    var users = group.users;
    var self = this;
    return (
      <div>
      {
        users.map(function(user) {
          return (
            <Col xs={6} key={user.studentNumber}>
            <Panel className={elementClass}>
                <Col xs={10}>
                  {user.firstName} {user.studentNumber}
                </Col>
                <Col xs={2}>
                  <i onClick={self.removeUser.bind(null, user, group)}>
                  {removeUserIcon}
                  </i>
                  </Col>
            </Panel>
            </Col>
          );
        })
      }
      </div>
    );
  }
});

module.exports = GroupSelectorElement;

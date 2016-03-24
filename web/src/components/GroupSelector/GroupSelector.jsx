// TODO: http://react-bootstrap.github.io/components.html#panels-accordion


var React = require("react");

// react-router

// bootstrap
var PanelGroup = require("react-bootstrap").PanelGroup;
var Panel = require("react-bootstrap").Panel;
var Button = require("react-bootstrap").Button;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

// local
var GroupSelectorElement = require("./GroupSelectorElement.jsx");
var GroupSelectorAdd = require("./GroupSelectorAdd.jsx");

var GroupSelectorAPI = require("../../utils/GroupSelectorAPI.js");
var GroupManagerStore = require("../../stores/GroupManagerStore.js");

var GroupSelectorActionCreators = require("../../actions/GroupSelectorActionCreators.js");

// stores
var mock = require("./mock.js");
// var GroupManagerStore = require("../../stores/GroupManagerStore.js");


function getStateFromStores() {
  return {
    groups: GroupManagerStore.getAllGroups(),
  };
}
// this className
var GroupSelector = React.createClass({

  getInitialState: function() {
    GroupSelectorAPI.getAllGroups()
    return getStateFromStores();
  },

  componentDidMount: function() {
    GroupManagerStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    GroupManagerStore.removeChangeListener(this._onChange);
  },

  activateGroup: function(group) {
    GroupSelectorActionCreators.activateGroup(group);
  },

  addNewGroup: function() {
    GroupSelectorActionCreators.addNewGroup();
  },
  removeGroup: function(group) {
    GroupSelectorActionCreators.removeGroup(group);
  },

  removeUser: function(student, group) {
    GroupSelectorActionCreators.removeUser(student, group);
  },

  render: function() {
    var self = this;
    var groups = this.state.groups;

    return (
        // TODO : map function for GroupSelectorElement
          <PanelGroup accordion>
            <b><p>
            New groups
            </p></b>
            {
              groups.map(function(group) {
                return (
                  <div key={group.number}>
                    <Panel
                    className="groupelementbutton"
                    collapsible expanded={!group.active}
                    block onClick={self.activateGroup.bind(self, group)}
                    >
                    <Row>
                      <Col xs={10}>
                        <b>{group.name}</b>
                      </Col>
                      <Col xs={2}>
                        <Button onClick={self.removeGroup.bind(self, group)} bsSize="xsmall">-</Button>
                      </Col>
                    </Row>
                    </Panel>
                    <Panel className="groupelement" collapsible expanded={group.active}>
                      <b>{group.name}</b>
                      <GroupSelectorElement group={group} removeUser={self.removeUser}/>
                    </Panel>
                  </div>
                );
              })
            }
            <GroupSelectorAdd addNewGroup={self.addNewGroup}/>
          </PanelGroup>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = GroupSelector;

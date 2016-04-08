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
    isGroupsExpanded: GroupManagerStore.isGroupsExpanded(),
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
  expandAll: function() {
    GroupSelectorActionCreators.expandeAll();
  },

  render: function() {
    const removeGroupIcon = <i className="groupmanagericons fa fa-times fa-fw fa-lg fa-border"></i>;
    const plusIcon = <i className="fa fa-plus fa-fw"></i>;
    const minusIcon = <i className="fa fa-minus fa-fw"></i>
    const addGroupIcon = <i className="fa fa-plus"></i>;


    var self = this;
    var groups = this.state.groups;
    var isGroupsExpanded = this.state.isGroupsExpanded;
    var expandToggle = "Expand";
    if (isGroupsExpanded) {
      expandToggle = "Collapse";
    }
    return (
        // TODO : map function for GroupSelectorElement
          <PanelGroup accordion>
          <Row>
            <Col xs={12}>
              <Col xs={4}>
                <Button onClick={this.addNewGroup}>New {addGroupIcon}</Button>
              </Col>
              <Col xs={4}>
                <Button onClick={this.expandAll}><b>{expandToggle}</b></Button>
              </Col>
              <Col xs={4}>
                <Button bsStyle="success"><b>Approve</b></Button>
              </Col>
            </Col>
          </Row>
          <br/>
            {
              groups.map(function(group) {
                var isExpanded = false;
                var wrapperClass = "groupwrapper "
                var groupClass = "group buttonify ";
                var elementClass = "groupelement ";
                var emptyToken = '';
                var len = group.users.length;
                if (len === 0) {
                  emptyToken = "(empty)";
                } else {
                  emptyToken = "Students: " + len;
                }
                if (group.active || group.expanded) {
                  groupClass += "buttonactive aggray";
                  wrapperClass += "wrapperactive aggray";
                  elementClass = "aggray";
                  isExpanded = true;
                }
                if (group.active) {
                  groupClass += "buttonactive agdarkgray";
                  wrapperClass += "wrapperactive agdarkgray";
                  elementClass = "agdarkgray";
                }
                console.log(wrapperClass);
                return (
                  <div key={group.number} className={wrapperClass}>
                    <Panel
                    className={groupClass}
                    block onClick={self.activateGroup.bind(self, group)}
                    >
                    <Row>
                      <Col xs={5}>
                        <b>{group.name}</b>
                      </Col>
                      <Col xs={5}>
                        {emptyToken}
                      </Col>
                      <Col xs={2}>
                        <i onClick={self.removeGroup.bind(self, group)} bsSize="xsmall">
                        {removeGroupIcon}
                        </i>
                      </Col>
                    </Row>
                    </Panel>
                    <Panel className={groupClass} collapsible expanded={isExpanded}>
                      <GroupSelectorElement elementClass={elementClass} group={group} removeUser={self.removeUser}/>
                    </Panel>
                  </div>
                );
              })
            }
          </PanelGroup>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = GroupSelector;

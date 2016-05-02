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

var TeacherGroupsAPI = require("../../utils/TeacherGroupsAPI.js");

//stores
var TeacherGroupsStore = require("../../stores/TeacherGroupsStore.js");
var UsersStore = require("../../stores/UsersStore.js");

var TeacherGroupsActionCreators = require("../../actions/TeacherGroupsActionCreators.js");

function getStateFromStores() {
  return {
    isGroupsExpanded: TeacherGroupsStore.isGroupsExpanded(),
  };
}
// this className
var GroupSelector = React.createClass({
  propTypes: {
    groups: React.PropTypes.array.isRequired,
  },

  getInitialState: function() {
    TeacherGroupsAPI.getAllGroups();
    return getStateFromStores();
  },

  componentDidMount: function() {
    TeacherGroupsStore.addChangeListener(this._onChange);
    UsersStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    TeacherGroupsStore.removeChangeListener(this._onChange);
    UsersStore.removeChangeListener(this._onChange);
  },

  activateGroup: function(group) {
    TeacherGroupsActionCreators.activateGroup(group);
  },

  addNewGroup: function() {
    TeacherGroupsActionCreators.addNewGroup();
  },
  removeGroup: function(group) {
    TeacherGroupsActionCreators.removeGroup(group);
  },

  expandAll: function() {
    TeacherGroupsActionCreators.expandeAll();
  },

  render: function() {
    const removeGroupIcon = <i className="groupmanagericons fa fa-times fa-fw fa-lg fa-border"></i>;
    const plusIcon = <i className="fa fa-plus fa-fw"></i>;
    const minusIcon = <i className="fa fa-minus fa-fw"></i>
    const addGroupIcon = <i className="fa fa-plus"></i>;


    var self = this;
    var groups = this.props.groups;
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
                var groupClass = "group textc buttonify ";
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
                return (
                  <div key={group.number} className={wrapperClass}>
                    <Panel
                    className={"groupheader " + groupClass}
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
                      <GroupSelectorElement elementClass={elementClass} group={group}/>
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

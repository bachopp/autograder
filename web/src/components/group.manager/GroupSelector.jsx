// TODO: http://react-bootstrap.github.io/components.html#panels-accordion


var React = require("react");

// react-router

// bootstrap
var PanelGroup = require("react-bootstrap").PanelGroup;
var Panel = require("react-bootstrap").Panel;
var Button = require("react-bootstrap").Button;

// local
var GroupSelectorElement = require("./GroupSelectorElement.jsx");
var GroupSelectorAdd = require("./GroupSelectorAdd.jsx");

var GroupSelectorAPI = require("../../utils/GroupSelectorAPI.js");
var GroupSelectorStore = require("../../stores/GroupSelectorStore.js");

var GroupSelectorActionCreators = require("../../actions/GroupSelectorActionCreators.js");

// stores
var mock = require("./mock.js");
// var GroupSelectorStore = require("../../stores/GroupSelectorStore.js");

propTypes: {
  activeGroup: React.PropTypes.bool.isRequired;
}

function getStateFromStores() {
  return {
    groups: GroupSelectorStore.getAllGroups(),
  };
}
// this className
var GroupSelector = React.createClass({

  getInitialState: function() {
    GroupSelectorAPI.getAllGroups()
    return getStateFromStores();
  },


  componentDidMount: function() {
    GroupSelectorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    GroupSelectorStore.removeChangeListener(this._onChange);
  },

  activateGroup: function(group) {
    GroupSelectorActionCreators.activateGroup(group);
  },

  addNewGroup: function() {
    GroupSelectorActionCreators.addNewGroup();
  },

  render: function() {
    var self = this;
    var groups = this.state.groups;

    var text = this.state.activeGroup ? true : false;

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
                    <Panel className="groupelementbutton" collapsible expanded={!group.active} block onClick={self.activateGroup.bind(self, group)} > <b>{group.name}</b> </Panel>
                    <Panel className="groupelement" collapsible expanded={group.active}>
                      <b>{group.name}</b>
                      <GroupSelectorElement group={group}/>
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

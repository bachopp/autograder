// TODO: http://react-bootstrap.github.io/components.html#panels-accordion


var React = require("react");

// react-router

// bootstrap
var PanelGroup = require("react-bootstrap").PanelGroup;
// local
var GroupSelectorElement = require("./GroupSelectorElement.jsx");
var GroupSelectorAdd = require("./GroupSelectorAdd.jsx");

// stores
var mock = require("./mock.js");
var GroupSelectorStore = require("../../stores/GroupSelectorStore.js");

function getStateFromStores() {
  return {
    users: mock.stnr(),
  };
}
// this className
var GroupSelector = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  render: function() {
    var usrs = this.state.users;
    console.log(usrs);

    return (
        // TODO : map function for GroupSelectorElement
        <PanelGroup accordion>
          <b><p>
            New groups
          </p></b>
          {usrs.map(function(user) {
            return (
                <GroupSelectorElement user={user} key={user.studentNumber}/>
            );
          })}

          <GroupSelectorAdd/>
        </PanelGroup>
    );
  }
});

module.exports = GroupSelector;

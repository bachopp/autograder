// TODO: http://react-bootstrap.github.io/components.html#panels-accordion


var React = require("react");

// react-router

// bootstrap
var PanelGroup = require("react-bootstrap").PanelGroup;
// local
var GroupSelectorElement = require("./GroupSelectorElement.jsx");
var GroupSelectorAdd = require("./GroupSelectorAdd.jsx");
// this className

var GroupSelector = React.createClass({

  render: function() {

    return (
        // TODO : map function for GroupSelectorElement
        <PanelGroup accordion>

          <GroupSelectorElement />

          <GroupSelectorAdd/>
        </PanelGroup>
    );
  }
});

module.exports = GroupSelector;

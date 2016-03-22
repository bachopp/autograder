var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

// local
var StudentAvailableSelectorElement = require("../components/StudentAvailableSelector/StudentAvailableSelectorElement.jsx");

var Sidepanel = require("../components/side.navigation/Sidepanel.jsx");
var StudentAvailableSelector = require("../components/StudentAvailableSelector/StudentAvailableSelector.jsx");
var GroupSelector = require("../components/GroupSelector/GroupSelector.jsx");

var GroupManager = React.createClass({

  render: function() {
    self = this;
    return(
      <Row>
          <Col xs={2}>
            <Sidepanel/>
          </Col>

          <Col xs={6}>
            <Col xs={12} className="whitebox">
              <StudentAvailableSelector />
            </Col>
          </Col>

          <Col xs={4}>
            <Col xs={12} className="whitebox">
              <GroupSelector/>
            </Col>
          </Col>
      </Row>

    );
  },
});

module.exports = GroupManager;

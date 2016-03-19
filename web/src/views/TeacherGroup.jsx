var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

// local
var StudentSelectorElement = require("../components/student.group.selector/StudentSelectorElement.jsx");

var Sidepanel = require("../components/side.navigation/Sidepanel.jsx");
var StudentSelector = require("../components/student.group.selector/StudentSelector.jsx");
var GroupSelector = require("../components/group.manager/GroupSelector.jsx");

var TeacherGroup = React.createClass({

  render: function() {
    self = this;
    return(
      <Row>
          <Col xs={2}>
            <Sidepanel/>
          </Col>

          <Col xs={6}>
            <Col xs={12} className="whitebox">
              <StudentSelector />
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

module.exports = TeacherGroup;

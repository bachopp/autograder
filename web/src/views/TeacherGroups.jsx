var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Panel = require("react-bootstrap").Panel;

// local

var TeacherSideNav = require("../components/TeacherSideNav/TeacherSideNav.jsx");
var StudentAvailableSelector = require("../components/StudentAvailableSelector/StudentAvailableSelector.jsx");
var GroupSelector = require("../components/GroupSelector/GroupSelector.jsx");

var TeacherGroups = React.createClass({

  render: function() {
    self = this;
    return(
      <Col xs={12}>
        <Col xs={7} className="infoboxleft">
            <StudentAvailableSelector />
        </Col>
        <Col xs={5} className="infoboxright">
            <GroupSelector/>
        </Col>
      </Col>
    );
  },
});

module.exports = TeacherGroups;

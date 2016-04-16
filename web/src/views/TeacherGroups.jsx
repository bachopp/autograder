var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Panel = require("react-bootstrap").Panel;

// actions
var SideNavActionCreators = require("../actions/SideNavActionCreators.js");

// local
var TeacherSideNav = require("../components/TeacherSideNav/TeacherSideNav.jsx");
var StudentAvailableSelector = require("../components/StudentAvailableSelector/StudentAvailableSelector.jsx");
var GroupSelector = require("../components/GroupSelector/GroupSelector.jsx");

// constants
const _nav = "groups";

var TeacherGroups = React.createClass({

  componentDidMount: function() {
    SideNavActionCreators.changeActiveSideElement(_nav);
  },

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

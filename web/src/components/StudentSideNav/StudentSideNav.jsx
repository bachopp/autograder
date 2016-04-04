var React = require("react");

// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Col = require("react-bootstrap").Col;
var Panel = require('react-bootstrap').Panel;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;
var FontAwesome = require('react-fontawesome');


var StudentSideNav = React.createClass({
  render: function() {
    const userIcon = <i className="fa fa-user fa-fw"></i>;
    const groupIcon = <i className="fa fa-users fa-fw"></i>;
    const infoIcon = <i className="fa fa-info fa-fw"></i>;
    const settingsIcon = <i className="fa fa-cog fa-fw"></i>;
    const taskIcon = <i className="fa fa-tasks fa-fw"></i>;

    // retrieve this from DB
    var lastCourse = "/DAT100";
    var lastLab = "/lab1id"

    return(
      <Col xs={12} className="whitebox">

      <Link to={"\/student\/results\/" + lastCourse}>
        <Button className="navButtonSelected" block>{taskIcon} Lab 1</Button>
      </Link>

        <Button className="navButton" disabled block>{taskIcon} Lab 2</Button>

        <Button className="navButton" disabled block>{taskIcon} Lab 3</Button>

        <Button className="navButton" disabled block>{taskIcon} Lab 4</Button>

        <Col xs={12} className="navButtonDivider"><b>Group labs</b></Col>

        <Button className="navButton" disabled block>{taskIcon} Lab 1</Button>

        <Button className="navButton" disabled block>{taskIcon} Lab 2</Button>

      <Col xs={12} className="navButtonDivider"><b>Course panel</b></Col>

      <Link to={"\/student\/members\/" + lastCourse}>
        <Button className="navButton" block>{userIcon} Members</Button>
      </Link>

      <Link to={"\/student\/groups\/" + lastCourse}>
        <Button className="navButton" block>{groupIcon} Groups</Button>
      </Link>

      <Link to={"\/student\/settings\/" + lastCourse}>
        <Button className="navButton" block>{settingsIcon} Settings Student</Button>
      </Link>

      <Link to={"\/student\/info\/" + lastCourse}>
      <Button className="navButton" block>{infoIcon} Course info</Button>
      </Link>

      </Col>
    );
  }
});


module.exports = StudentSideNav;

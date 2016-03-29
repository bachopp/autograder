var React = require("react");

// react-router
var Link = require("react-router").Link;

var Col = require("react-bootstrap").Col;
var Panel = require("react-bootstrap").Panel;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;
var FontAwesome = require('react-fontawesome');


var AdminSideNav = React.createClass({
  render: function() {
    const resultsIcon = <i className="fa fa-bar-chart fa-fw"></i>;
    const groupIcon = <i className="fa fa-users fa-fw"></i>;
    const infoIcon = <i className="fa fa-info fa-fw"></i>;
    const settingsIcon = <i className="fa fa-cog fa-fw"></i>;
    const unlockIcon = <i className="fa fa-unlock fa-fw"></i>;

    // retrieve this from DB
    var lastCourse = "/DAT100";

    return(
      <Col xs={12} className="whitebox">
        <Link to={"/admin"}>
          <Button className="navButton" bsStyle="danger" block>{unlockIcon} Admin options</Button>
        </Link>

        <Col xs={12} className="navButtonDivider"><b>Course panel</b></Col>

        <Link to={"\/admin" + lastCourse + "\/results"}>
          <Button className="navButton" block>{resultsIcon} Results</Button>
        </Link>

        <Link to={"\/admin" + lastCourse + "\/groups"}>
          <Button className="navButton" block>{groupIcon} Group manager</Button>
        </Link>

        <Link to={"\/admin" + lastCourse + "\/settings"}>
          <Button className="navButton" block>{settingsIcon} Settings</Button>
        </Link>

        <Link to={"\/admin" + lastCourse + "\/info"}>
        <Button className="navButton" block>{infoIcon} Course info</Button>
        </Link>

      </Col>
    );
  }
});


module.exports = AdminSideNav;

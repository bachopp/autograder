var React = require("react");

// react-router
var Link = require('react-router').Link;
// react-bootstrap
var Col = require("react-bootstrap").Col;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;
var FontAwesome = require('react-fontawesome');
const resultsIcon = <i className="fa fa-bar-chart fa-fw"></i>;
const userIcon = <i className="fa fa-user fa-fw"></i>;
const groupIcon = <i className="fa fa-users fa-fw"></i>;
const infoIcon = <i className="fa fa-info fa-fw"></i>;
const settingsIcon = <i className="fa fa-cog fa-fw"></i>;


var TeacherSideNav = React.createClass({

  render: function() {

    var self = this;

    // retrieve this from DB
    var lastCourse = "/DAT100";

    return(
      <Col xs={12} className="whitebox">

        <Link to={"\/teacher" + lastCourse + "\/results"}>
          <Button className="navButtonSelected" block>{resultsIcon} Results</Button>
        </Link>

        <Link to={"\/teacher" + lastCourse + "\/groups"}>
          <Button className="navButton" block>{groupIcon} Group Manager</Button>
        </Link>

        <Link to={"\/teacher" + lastCourse + "\/users"}>
          <Button className="navButton" block>{settingsIcon} User Manager</Button>
        </Link>

        <Link to={"\/teacher" + lastCourse + "\/settings"}>
          <Button className="navButton" block>{settingsIcon} Settings</Button>
        </Link>

        <Link to={"\/teacher" + lastCourse + "\/info"}>
        <Button className="navButton" block>{infoIcon} Course info</Button>
        </Link>

        {this.props.children}
      </Col>
    );
  }
});


module.exports = TeacherSideNav;

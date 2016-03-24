var React = require("react");

// react-router
var Link = require('react-router').Link;
// react-bootstrap
var Col = require("react-bootstrap").Col;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;
var FontAwesome = require('react-fontawesome');
const userIcon = <i className="fa fa-user fa-fw"></i>;
const groupIcon = <i className="fa fa-users fa-fw"></i>;
const infoIcon = <i className="fa fa-info fa-fw"></i>;
const settingsIcon = <i className="fa fa-cog fa-fw"></i>;


var TeacherSideNav = React.createClass({

  render: function() {

    var self = this;

    // retrieve this from DB
    var lastCourse = "DAT100";

    return(
      <Col xs={12} className="whitebox">

        <Link to={"\/teacher\/"+lastCourse+"\/results"}>
          <Button className="navButtonSelected" block>{userIcon} Results</Button>
        </Link>

        <Link to={"\/teacher\/"+lastCourse+"\/groups"}>
          <Button className="navButton" block>{groupIcon} Group Manager</Button>
        </Link>

        <Button className="navButton" block>{settingsIcon} Settings</Button>
        <Button className="navButton" block>{infoIcon} Course info</Button>
        {this.props.children}
      </Col>
    );
  }
});


module.exports = TeacherSideNav;

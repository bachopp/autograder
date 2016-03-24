var React = require("react");

// react-router
var Link = require('react-router').Link;
// react-bootstrap
var Col = require("react-bootstrap").Col;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;
var FontAwesome = require('react-fontawesome');


var TeacherSideNav = React.createClass({

  componentWillUnmount: function() {
    console.log("TeacherSideNav.jsx unmounted");
  },

  render: function() {
    const userIcon = <i className="fa fa-user fa-fw"></i>;
    const groupIcon = <i className="fa fa-users fa-fw"></i>;
    const infoIcon = <i className="fa fa-info fa-fw"></i>;
    const settingsIcon = <i className="fa fa-cog fa-fw"></i>;

    return(
      <Col xs={12} className="whitebox">
        <Button className="navButtonSelected" block>{userIcon} Students</Button>

        <Link to="/teacher/DAT100/groups">
          <Button className="navButton" block>{groupIcon} Group Manager</Button>
        </Link>

        <Button className="navButton" block>{settingsIcon} Settings</Button>
        <Button className="navButton" block>{infoIcon} Course info</Button>
      </Col>
    );
  }
});


module.exports = TeacherSideNav;

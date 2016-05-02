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

// const
var constants = require('../../constants/constants.js');
var mode = constants.mode;
// stores
var UsersStore = require("../../stores/UsersStore.js");
// actions
var SideNavActionCreators = require("../../actions/SideNavActionCreators.js");

var StudentSideNav = React.createClass({

  propTypes: {
    courses: React.PropTypes.array.isRequired,
    activeElement: React.PropTypes.string.isRequired,
  },

  handleClick: function(activeElement) {
    SideNavActionCreators.changeActiveSideElement(activeElement);
  },

  getLastCourse: function(courses) {
    // TODO: coockies
    return UsersStore.getActiveCourse();
  },

  render: function() {
    var self = this;
    const userIcon = <i className="fa fa-user fa-fw"></i>;
    const groupIcon = <i className="fa fa-users fa-fw"></i>;
    const infoIcon = <i className="fa fa-info fa-fw"></i>;
    const settingsIcon = <i className="fa fa-cog fa-fw"></i>;
    const taskIcon = <i className="fa fa-tasks fa-fw"></i>;

    var lastCourse = this.getLastCourse(this.props.courses);

    return(
      <Col xs={12} className="whitebox">

      <Link to={"\/Student\/results\/" + lastCourse}>
        <Button onClick={self.handleClick.bind(self,"results")} className="navButton" block>{taskIcon} Lab 1</Button>
      </Link>

        <Button className="navButton" disabled block>{taskIcon} Lab 2</Button>

        <Button className="navButton" disabled block>{taskIcon} Lab 3</Button>

        <Button className="navButton" disabled block>{taskIcon} Lab 4</Button>

        <Col xs={12} className="navButtonDivider"><b>Group labs</b></Col>

        <Button className="navButton" disabled block>{taskIcon} Lab 1</Button>

        <Button className="navButton" disabled block>{taskIcon} Lab 2</Button>

      <Col xs={12} className="navButtonDivider"><b>Course panel</b></Col>

      <Link to={"\/Student\/members\/" + lastCourse}>
        <Button onClick={self.handleClick.bind(self,"members")} className="navButton" block>{userIcon} Members</Button>
      </Link>

      <Link to={"\/Student\/groups\/" + lastCourse}>
        <Button onClick={self.handleClick.bind(self,"groups")} className="navButton" block>{groupIcon} Groups</Button>
      </Link>

      <Link to={"\/Student\/settings\/" + lastCourse}>
        <Button onClick={self.handleClick.bind(self,"settings")} className="navButton" block>{settingsIcon} Settings Student</Button>
      </Link>

      <Link to={"\/Student\/info\/" + lastCourse}>
      <Button onClick={self.handleClick.bind(self,"info")} className="navButton" block>{infoIcon} Course info</Button>
      </Link>

      </Col>
    );
  }
});


module.exports = StudentSideNav;

var React = require("react");

// react-router
var Link = require('react-router').Link;
var browserHistory = require('react-router').browseHostory;
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

// stores
var UsersStore = require("../../stores/UsersStore.js");
// actions
var SideNavActionCreators = require("../../actions/SideNavActionCreators.js");

var TeacherSideNav = React.createClass({

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

    var activeElement = this.props.activeElement;

    var lastCourse = this.getLastCourse(this.props.courses);

    return(
      <Col xs={12} className="whitebox">

        <Link to={"\/Teacher\/results/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"results")} className="navButton" block>{resultsIcon} Results</Button>
        </Link>

        <Link to={"\/Teacher\/groups/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"groups")} className="navButton" block>{groupIcon} Groups</Button>
        </Link>

        <Link to={"\/Teacher\/users\/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"users")} className="navButton" block>{settingsIcon} Users</Button>
        </Link>

        <Link to={"\/Teacher\/settings\/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"settings")} className="navButton" block>{settingsIcon} Settings</Button>
        </Link>

        <Link to={"\/Teacher\/info\/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"info")} className="navButton" block>{infoIcon} Info</Button>
        </Link>

        {this.props.children}
      </Col>
    );
  }
});


module.exports = TeacherSideNav;

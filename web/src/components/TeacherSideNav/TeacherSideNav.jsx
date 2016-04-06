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

// actions
var SideNavActionCreators = require("../../actions/SideNavActionCreators.js");

var TeacherSideNav = React.createClass({

  propTypes: {
    lastCourse: React.PropTypes.string.isRequired,
  },

  handleClick: function(activeElement) {
    SideNavActionCreators.changeActiveSideElement(activeElement);
  },

  render: function() {

    var self = this;

    var lastCourse = this.props.lastCourse;

    return(
      <Col xs={12} className="whitebox">

        <Link to={"\/teacher\/results/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"results")} className="navButton" block>{resultsIcon} Results</Button>
        </Link>

        <Link to={"\/teacher\/groups/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"groups")} className="navButton" block>{groupIcon} Groups</Button>
        </Link>

        <Link to={"\/teacher\/users\/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"users")} className="navButton" block>{settingsIcon} Users</Button>
        </Link>

        <Link to={"\/teacher\/settings\/" + lastCourse}>
          <Button onClick={self.handleClick.bind(self,"settings")} className="navButton" block>{settingsIcon} Settings</Button>
        </Link>

        <Link to={"\/teacher\/info\/" + lastCourse}>
        <Button onClick={self.handleClick.bind(self,"info")} className="navButton" block>{infoIcon} Info</Button>
        </Link>

        {this.props.children}
      </Col>
    );
  }
});


module.exports = TeacherSideNav;

var React = require("react");

// react-bootstrap requires
var Nav = require("react-bootstrap").Nav;

// react-router
var Link = require("react-router").Link;

// local components requries
var DropdownList = require("./DropdownList.jsx")

// stores
var TopBarActionCreators = require("../../actions/TopBarActionCreators.js");

// constants
var constants = require("../../constants/constants.js");
var mode = constants.mode;

var Navigation = React.createClass({
  propTypes: {
    roles: React.PropTypes.array.isRequired,
    activeRole: React.PropTypes.string.isRequired,
  },

  handleClick: function(mode) {
    TopBarActionCreators.receiveUserCourses(mode);
  },

  getLastSideNav: function() {

  },
  getLastCourse: function(role) {
    // TODO: coockies
    console.log(role.Courses)
    return "/" + role.Courses.Courses[0].Name;
  },

  render:function() {
    var self = this;
    var roles = this.props.roles;
    var activeRole = this.props.activeRole;

    var defaultPage = "";
    // change last course to get DB
    var isActive = "";
    var i = 0;
    return(
      <Nav>
        {roles.map(function(role) {
          if (activeRole === role.Mode) {
            isActive = "textc buttonify buttonactive";
          } else {
            isActive = "textc buttonify";
          }
          i++;
          var modeLink = "/";
          switch (role.Mode) {
            case mode.Admin:
              modeLink += mode.Admin;
              break;
            case mode.Teacher:
              lastCourse = self.getLastCourse(role);
              defaultPage = "/results";
              modeLink += role.Mode + defaultPage + lastCourse;
              break;
            case mode.Student:
              lastCourse = self.getLastCourse(role);
              lastLab = "/lab1id";
              defaultPage = "/results";
              modeLink += role.Mode + defaultPage + lastCourse;
              break;
            default:
            // noop
          }

          return(
            <li className={isActive} key={i} onClick={self.handleClick.bind(self, role.Mode)}>
              <Link to={modeLink}>{role.Mode}</Link>
            </li>
          );
        })}
      </Nav>
    );
  }
})

module.exports = Navigation;

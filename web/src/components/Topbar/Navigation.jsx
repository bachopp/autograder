var React = require("react");

// react-bootstrap requires
var Nav = require("react-bootstrap").Nav;

// react-router
var Link = require("react-router").Link;

// local components requries
var DropdownList = require("./DropdownList.jsx")

// stores
var TopBarActionCreators = require("../../actions/TopBarActionCreators.js");

var Navigation = React.createClass({
  propTypes: {
    roles: React.PropTypes.array.isRequired,
  },

  handleClick: function(mode) {
    console.log("animate click " + mode);
    TopBarActionCreators.receiveUserCourses(mode);
  },

  render:function() {
    var self = this;
    var roles = this.props.roles;

    var lastCourse = "";
    var defaultPage = "";
    // change last course to get DB
    var i = 0;
    return(
      <Nav>
        {roles.map(function(role) {
          i++;
          var modeLink = "/";

          switch (role.Mode) {
            case "admin":
              modeLink += "admin";
              break;
            case "teacher":
              lastCourse = "/DAT100";
              defaultPage = "/results";
              modeLink += role.Mode + defaultPage + lastCourse;
              break;
            case "student":
              lastCourse = "/DAT100";
              lastLab = "/lab1id";
              defaultPage = "/results";
              modeLink += role.Mode + defaultPage + lastCourse;
              break;
            default:
            // noop
          }

          return(
            <li key={i} onClick={self.handleClick.bind(self, role.Mode)}>
              <Link to={modeLink}>{role.Mode}</Link>
            </li>
          );
        })}
      </Nav>
    );
  }
})

module.exports = Navigation;

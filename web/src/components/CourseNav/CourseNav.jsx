var React = require("react");
// react-router
var Link = require("react-router").Link;
var browserHistory = require("react-router").browserHistory;
var Router = require("react-router").Router;
var Route = require("react-router").Route;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;
var ButtonGroup = require("react-bootstrap").ButtonGroup;

// local requires
var CoursesStore = require("../../stores/CoursesStore.js");
var UsersStore = require("../../stores/UsersStore.js");
var SideNavStore = require("../../stores/SideNavStore.js");

var TopBarActionCreators = require("../../actions/TopBarActionCreators.js");
var CourseNavActionCreators = require("../../actions/CourseNavActionCreators.js");

function getStateFromStores() {
  return {
    sidenav: SideNavStore.getActiveElement(),
    activeCourse: UsersStore.getActiveCourse(),
  }
}

// local
var CourseNav = React.createClass({

  propTypes: {
    courses: React.PropTypes.array.isRequired,
    mode: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    // Calls for initial data from server on first render cycle only when mounted.
    return getStateFromStores();
  },

  componentDidMount: function() {
    UsersStore.addChangeListener(this._onChange);
    SideNavStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UsersStore.removeChangeListener(this._onChange);
    SideNavStore.removeChangeListener(this._onChange);
  },

  handleClick: function(url, course) {
    // var courseObj = {name: course};
    CourseNavActionCreators.changeActiveCourse(course);
    browserHistory.push(url);
  },

  render: function() {
    var self = this;

    var courses = this.props.courses;
    var mode = this.props.mode;

    var sidenav = this.state.sidenav;
    var activeCourse = this.state.activeCourse;

    var size = Math.floor(12/courses.length);
    var active = '';
    if (activeCourse == '') {
      active = courses[0];
    }else {
      active = activeCourse;
    }

    return (
      <Row>
      <ButtonGroup justified>
      {
        courses.map(function(course) {
          if (active === course) {
            isActive = "buttonactive";
          } else {
            isActive = "";
          }
          var classes = "textc buttonify infoboxleft " + isActive;
          var url = "\/" + mode + "\/" + sidenav + "/" + course
          return (
            <Col
            xs={size}
            key={course}
            onClick={self.handleClick.bind(self, url, course)}
            className={classes}
            >
                {course}
            </Col>
          );
        })
      }
      </ButtonGroup>
      </Row>
    );
    },
  _onChange: function() {
    this.setState(getStateFromStores());
  },
});

module.exports = CourseNav;

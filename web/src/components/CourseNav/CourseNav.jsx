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
var CourseNavStore = require("../../stores/CourseNavStore.js");

var TopBarActionCreators = require("../../actions/TopBarActionCreators.js");

function getStateFromStores() {
  return {
    role: CourseNavStore.getRole(),
    sidenav: CourseNavStore.getCurrentSideNav(),
    activeCourse: CourseNavStore.getActiveCourse(),
  }
}


// local
var CourseNav = React.createClass({

  propTypes: {
    courses: React.PropTypes.array.isRequired,
  },

  getInitialState: function() {
    // Calls for initial data from server on first render cycle only when mounted.
    return getStateFromStores();
  },

  componentDidMount: function() {
    CoursesStore.addChangeListener(this._onChange);
    CourseNavStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CoursesStore.removeChangeListener(this._onChange);
    CourseNavStore.removeChangeListener(this._onChange);
  },

  handleClick: function(here) {
    browserHistory.push(here);
  },

  componentDidMount: function() {
    var a = this.props;
  },

  render: function() {
    var self = this;

    var courses = this.props.courses;

    var role = this.state.role;
    var sidenav = this.state.sidenav;
    var activeCourse = this.state.activeCourse.name;

    var size = Math.floor(12/courses.length);
    var isActive = ""; // courseactive

    return (
      <Row>
      <ButtonGroup justified>
      {
        courses.map(function(course) {
          var classes = "buttonyfy infoboxleft " + isActive;
          var url = "\/" + role + sidenav + "/" + course
          return (
            <Col
            xs={size}
            key={course}
            onClick={self.handleClick.bind(self, url)}
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

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
// local
var CourseNav = React.createClass({

  propTypes: {
    courses: React.PropTypes.array.isRequired,
    role: React.PropTypes.string,
    activeCourse: React.PropTypes.object,
  },

  getInitialState: function() {
    return {
      role: "/teacher",
      sidenav: "/results",
      activeCourse: {name: "/DAT100"},
    };
  },

  handleClick: function(here) {
    browserHistory.push(here);
  },

  componentDidMount: function() {
    var a = this.props;
    console.log(a);
  },

  render: function() {
    var self = this;

    var courses = this.props.courses;
    var role = this.state.role;
    var sidenav = this.state.sidenav;

    var activeCourse = this.state.activeCourse.name;
    var size = Math.floor(12/courses.length);
    var isActive = "" // courseactive

    return (
      <Row>
      <ButtonGroup justified>
      {
        courses.map(function(course) {
          var classes = "buttonyfy infoboxleft " + isActive;
          var url = role + sidenav + "/" + course
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
});

module.exports = CourseNav;

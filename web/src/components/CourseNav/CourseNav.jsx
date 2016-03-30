var React = require("react");
// react-router
var Link = require("react-router").Link;
var browserHistory = require("react-router").browserHistory;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
// local
var CourseNav = React.createClass({

  propTypes: {
    courses: React.PropTypes.array.isRequired,
  },

  // getInitialState: function() {
    // return
  // },

  handleClick: function(here) {
    browserHistory.push(here);
  },

  render: function() {
    var self = this;
    var courses = this.props.courses;
    var size = Math.floor(12/courses.length);
    var isActive = "" // courseactive
    return (
      <Row>
      <ButtonGroup justified>
      {
        courses.map(function(course) {
          var navigate = "\/student\/" + course + "\/results/lab1id";
          var classes = "buttonyfy infoboxleft " + isActive;
          return (
            <Col
            xs={size}
            key={course}
            onClick={self.handleClick.bind(self, navigate)}
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

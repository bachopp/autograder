var React = require("react");
// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

// local
var CourseNav = React.createClass({

  propTypes: {
    courses: React.PropTypes.array.isRequired,
  },

  getInitialState: function() {
    
  },

  render: function() {
    var self = this;
    var courses = this.props.courses;
    var size = Math.floor(12/courses.length);
    return (
      <Col xs={12}>
      {
        courses.map(function(course) {
          return (
            <Col xs={size} key={course}>
              <Link to="#">
                <Button className="navButton" >{course}</Button>
              </Link>
            </Col>
          );
        })
      }
      </Col>
    );
    },
});

module.exports = CourseNav;

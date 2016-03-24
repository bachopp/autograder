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
    courses: React.PropTypes.array.isRequired
  },

  render: function() {
    var self = this;
    var courses = this.props.courses;
    console.log(courses[0].name);
    var size = Math.floor(12/courses.length);
    console.log(size);
    return(
      <Col xs={12}>
        {
          courses.map(function(course) {
            <Col xs={size}>
              <Link to="#">
                <Button className="navButton" >{course.name}</Button>
              </Link>
            </Col>
          })
        }
      </Col>
    );
  },
});

module.exports = CourseNav;

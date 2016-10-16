var React = require("react")
//reactbootstrap
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;

var CourseCard = require("./CourseCard.jsx");

var CardWrapper = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired,
    role: React.PropTypes.string.isRequired,
  },
  render: function() {
    var self = this;
    var courses = this.props.courses;
    var sizeVar = 12/courses.length;
    return(
        <Col>
          {courses.map(function(course) {
              return(
                <Col xs={3} key={"cardVarSize" + course.ID}>
                  <CourseCard key={"cardWrapper" + course.ID} course={course} role={self.props.role}/>
                </Col>
              );
          })}
        </Col>
    );
  }
})

module.exports = CardWrapper;

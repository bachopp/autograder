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
    return(
      <Row>
        <Col xs={10}>
          {courses.map(function(course){
            return(
              <CourseCard key={course.Courseid} course={course} role={self.props.role}/>
            );
          })}
        </Col>
      </Row>
    );
  }
})

module.exports = CardWrapper;

var React = require("react");

//reactbootstrap
var Button = require("react-bootstrap").Button
var Col = require("react-bootstrap").Col

var Link = require("react-router").Link;

var CourseCard = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    role: React.PropTypes.string.isRequired,
  },
  render: function() {
    var self = this;
    var course = this.props.course;
    var role = this.props.role;
    var roleCourse =  role +"/"+ course.CourseName + "/results";
    var roleCourseGroup = role +"/"+ course.CourseName + "/groups";
    return(
      <Col xs={12} sm={12} md={12} lg={12} className="whitebox">
        <h4>{course.CourseName}</h4>
        <p>
          Dummy desciption and status
          <br/>
          Approved
        </p>
        <Link to={roleCourse} ><Button>View course</Button></Link>
        <Link to={roleCourseGroup} ><Button>Manage groups</Button></Link>
      </Col>
    );
  }
})


module.exports = CourseCard;

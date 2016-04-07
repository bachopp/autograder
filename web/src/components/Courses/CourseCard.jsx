var React = require("react");

//reactbootstrap
var Button = require("react-bootstrap").Button
var Col = require("react-bootstrap").Col

var Link = require("react-router").Link;
var browserHistory = require("react-router").browserHistory;

// actions
var CourseNavActionCreators = require("../../actions/CourseNavActionCreators.js");

var CourseCard = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    role: React.PropTypes.string.isRequired,
  },
  handleClick: function(there, course) {
    CourseNavActionCreators.changeActiveCourse(course);
    browserHistory.push(there);
  },
  render: function() {
    var self = this;
    var course = this.props.course;
    var role = this.props.role;
    var roleCourse = role;
    if (role !== "admin") {
      roleCourse =  role +"/results/"+ course.CourseName
    }
    return(
      <div onClick={this.handleClick.bind(this, roleCourse, course.CourseName)} >
      <Col xs={12} xsOffset={0} className="whitebox coursecardbutton">
        <h4>{course.CourseName}</h4>
        <p>
          Course ID: <b>{course.Courseid}</b><br/>
          Dummy desciption and status
          <br/>
          Approved
        </p>
      </Col>
      </div>
    );
  }
})


module.exports = CourseCard;

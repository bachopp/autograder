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
    if (role !== "Admin") {
      roleCourse =  role +"/results/"+ course.Name
    }
    return(
      <div onClick={this.handleClick.bind(this, roleCourse, course.CourseName)} >
        <Col xs={12} xsOffset={0} className="whitebox whiteboxWithHover coursecardbutton" >
          <h4 className="colouredHeader">{course.Name}</h4>
          <p className="fadedText">
            Course ID: <b>{course.ID}</b><br/>
            {course.Description}
          </p>
        </Col>
      </div>
    );
  }
})


module.exports = CourseCard;

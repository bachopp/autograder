var React = require("react");

//reactbootstrap
var Button = require("react-bootstrap").Button
var Col = require("react-bootstrap").Col


var CourseCard = React.createClass({
  propTypes: {
    course: React.PropTypes.object
  },
  render: function() {
    var self = this;
    var course = this.props.course;
    return(
      <Col xs={12} sm={12} md={12} lg={12} className="whitebox">
        <h4>{course.CourseName}</h4>
        <p>
          Dummy desciption and status
          <br/>
          Approved
        </p>
        <Button>View course</Button>
      </Col>
    );
  }
})


module.exports = CourseCard;

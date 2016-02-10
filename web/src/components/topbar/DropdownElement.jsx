var React = require("react")

// react-bootstrap
var MenuItem = require("react-bootstrap").MenuItem
// react-router

// this class


var DropdownElement = React.createClass({
  propTypes: {
    chooseCourse: React.PropTypes.func.isRequired,
    course: React.PropTypes.object.isRequired
  },

  onClick: function(e) {
    e.preventDefault();
    console.log(e);
    var {chooseCourse, course}= this.props;
    chooseCourse(course);
  },

  render: function() {
    var course = this.props.course;
    return (
      <MenuItem onClick={this.onClick}>
      {course.name}
      </MenuItem>
    );
  }
})

module.exports = DropdownElement;

var React = require("react")

// react-bootstrap
var MenuItem = require("react-bootstrap").MenuItem
// react-router
var Link = require("react-router").Link
// this class


var DropdownElement = React.createClass({
  propTypes: {
    chooseCourse: React.PropTypes.func.isRequired,
    course: React.PropTypes.object.isRequired
  },

  onClick: function(e) {
    e.preventDefault();
    console.log(e);
    var chooseCourse = this.props.chooseCourse;
    var course = this.props.course;
    chooseCourse(course);
  },

  render: function() {
    var course = this.props.course;
    return (
      <li onClick={this.onClick}>
        <Link to={course.name}>{course.name}</Link>
      </li>
    );
  }
})

module.exports = DropdownElement;

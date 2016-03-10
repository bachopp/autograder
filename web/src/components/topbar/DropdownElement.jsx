var React = require("react")

// react-bootstrap
var MenuItem = require("react-bootstrap").MenuItem
// react-router
var Link = require("react-router").Link
// this class


var DropdownElement = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    mode: React.PropTypes.string.isRequired,
  },

  onClick: function(e) {
    e.preventDefault();
  },

  render: function() {
    var course = this.props.course;
    var mode = this.props.mode;
    var roleCourse = "/"+mode +"/"+ course.CourseName;
    return (
      <li onClick={this.onClick}>
        <Link to={roleCourse}>{course.CourseName}</Link>
      </li>
    );
  }
})

module.exports = DropdownElement;

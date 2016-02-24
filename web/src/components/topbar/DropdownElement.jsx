var React = require("react")

// react-bootstrap
var MenuItem = require("react-bootstrap").MenuItem
// react-router
var Link = require("react-router").Link
// this class


var DropdownElement = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired
  },

  onClick: function(e) {
    e.preventDefault();
    console.log(e);
    var course = this.props.course;
  },

  render: function() {
    var course = this.props.course;
    return (
      <li onClick={this.onClick}>
        <Link to={course.CourseName}>{course.CourseName}</Link>
      </li>
    );
  }
})

module.exports = DropdownElement;

var React = require("react")

// react-bootstrap requires
var NavDropdown = require("react-bootstrap").NavDropdown


// local component requires
var DropdownElement = require("./DropdownElement.jsx")

// this class
var DropdownList = React.createClass({

  propTypes: {
    courses: React.PropTypes.array.isRequired,
    mode: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  },

  render:function() {
    var self = this;
    var courses = this.props.courses;
    var mode = this.props.mode;
    return (
      <NavDropdown title={this.props.title} id="basic-nav-dropdown">
        {
          courses.map( function(course) {
            return(
            <DropdownElement
              course={course}
              mode={mode}
              key={course.Courseid}
            />
          );
          })
        }
        </NavDropdown>
    );
  }
});


module.exports = DropdownList;

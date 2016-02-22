var React = require("react")

// react-bootstrap requires
var NavDropdown = require("react-bootstrap").NavDropdown


// local component requires
var DropdownElement = require("./DropdownElement.jsx")

// this class
var DropdownList = React.createClass({

  propTypes: {
    courses: React.PropTypes.array,
    title: React.PropTypes.string,
  },

  render:function() {
    var self = this;
    var courses = this.props.courses;
    console.log(courses);
    return (
      <NavDropdown title={this.props.title} id="basic-nav-dropdown">
        {
          courses.map( function(course) {
            return(
            <DropdownElement
              course={course}
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

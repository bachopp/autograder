var React = require("react")

// react-bootstrap requires
var NavDropdown = require("react-bootstrap").NavDropdown


// local component requires
var DropdownElement = require("./DropdownElement.jsx")

// this class
var DropdownList = React.createClass({

  propTypes: {
    chooseCourse: React.PropTypes.func.isRequired,
    courses: React.PropTypes.array.isRequired,
  },

  render:function() {
    var self = this;

    return (
        <NavDropdown title="Teacher" id="basic-nav-dropdown">
        {
          self.props.courses.map( function(cou) {
            return <DropdownElement
            chooseCourse={self.props.chooseCourse}
            course={cou}
            key={cou.id}
            />
          })
        }
        </NavDropdown>
    );
  }
});


module.exports = DropdownList;

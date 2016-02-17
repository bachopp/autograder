var React = require("react")
var Nav = require("react-bootstrap").Nav

// react-bootstrap requires

// local components requries
var DropdownList = require("./DropdownList.jsx")

var Dropdown = React.createClass({
  propTypes: {
    //chooseCourse: React.PropTypes.func.isRequired,
    courses: React.PropTypes.array,
  },

  // TODO: find out how to list the dropdown lists, like if(permitted) draw...

  render:function() {
    var self = this;
    var roles = this.props.roles;
    return(
        <Nav>
        {roles.map(function(role) {
          return(
            <DropdownList
              key={role.dropDownName}
              title={role.dropDownName}
              courses={role.dropDownElements}/>
          );
        })}
        </Nav>
    );
  }
})

module.exports = Dropdown;

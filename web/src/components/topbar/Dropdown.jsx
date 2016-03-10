var React = require("react")
var Nav = require("react-bootstrap").Nav

// react-bootstrap requires

// local components requries
var DropdownList = require("./DropdownList.jsx")

var Dropdown = React.createClass({
  propTypes: {
    roles: React.PropTypes.array.isRequired,
  },

  render:function() {
    var self = this;
    var roles = this.props.roles;
    return(
        <Nav>
        {roles.map(function(role) {
          return(
            <DropdownList
              key={role.Mode}
              title={role.Mode}
              mode={role.Mode}
              courses={role.Courses}
              />
          );
        })}
        </Nav>
    );
  }
})

module.exports = Dropdown;

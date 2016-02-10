var React = require("react")

// react-bootstrap requires
var Navbar = require("react-bootstrap").Navbar
var NavItem = require("react-bootstrap").NavItem
var Nav = require("react-bootstrap").Nav

// react-router requires

// local requires
var Dropdown = require("./Dropdown.jsx")

// this class
var Topbar = React.createClass({
  getInitialState: function() {
    return {
      courses: [
        {id: 0, name:"DAT100"},
        {id: 1, name:"DAT200"},
        {id: 2, name:"DAT300"}
      ]
    };
  },

  chooseCourse: function() {
      this.setState({choosen: choosen});
  },

  // TODO : iterate over buttons available fo user
  render:function() {
    var self = this;
    return (
      <Navbar inverse>

        <Navbar.Header>
          <Navbar.Brand>
            <a>Autograder</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>

          <Dropdown
          courses={self.state.courses}
          chooseCourse={self.chooseCourse}
          />

          </Nav>

          <Nav pullRight>
            <NavItem>Help</NavItem>
            <NavItem>Log in</NavItem>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
})

module.exports = Topbar;

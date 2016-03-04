var React = require("react");

// react-bootstrap requires
var Navbar = require("react-bootstrap").Navbar;
var NavItem = require("react-bootstrap").NavItem;
var Nav = require("react-bootstrap").Nav;

// react-router requires
var Link = require("react-router").Link;
// components
var Dropdown = require("./Dropdown.jsx");
var LoginForm = require("../login/LoginForm.jsx");
// stores
var TopBarStore = require("../../stores/TopBarStore.js");
// utils
var TopBarAPIUtils = require("../../utils/TopBarAPIUtils");

// Calls for initial data from server on first render cycle only.
TopBarAPIUtils.getAllRoles();

function getStateFromStores() {
  return {
    roles: TopBarStore.getAllRoles(),
  };
}

// this class
var Topbar = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    TopBarStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TopBarStore.removeChangeListener(this._onChange);
  },

  // TODO : iterate over buttons available fo user
  render:function() {
    var self = this;

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Autograder</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Dropdown
            roles={self.state.roles}
            />
          <Nav pullRight>
            <li>
              <Link to="/student">Student</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/oauth">Github Login</Link>
            </li>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },
})

module.exports = Topbar;

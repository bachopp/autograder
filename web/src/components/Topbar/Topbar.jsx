var React = require("react");

// react-bootstrap requires
var Navbar = require("react-bootstrap").Navbar;
var NavItem = require("react-bootstrap").NavItem;
var Nav = require("react-bootstrap").Nav;

// react-router requires
var Link = require("react-router").Link;
// components
var Dropdown = require("./Dropdown.jsx");
var Navigation = require("./Navigation.jsx");
// stores
var UsersStore = require("../../stores/UsersStore.js");
// utils
var TopBarAPIUtils = require("../../utils/TopBarAPIUtils");
var TopBarAPIUtils = require("../../utils/TopBarAPIUtils.js");

function getStateFromStores() {
  return {
    roles: UsersStore.getAllRoles(),
    activeRole: UsersStore.getCurrentRole(),
  };
}

// this class
var Topbar = React.createClass({
  getInitialState: function() {
    // Calls for initial data from server on first render cycle only.
    // TopBarAPIUtils.getAllRoles();
    TopBarAPIUtils.getAllRoles();
    return getStateFromStores();
  },

  componentDidMount: function() {
    UsersStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UsersStore.removeChangeListener(this._onChange);
  },

  // TODO : iterate over buttons available fo user
  render:function() {
    var self = this;
    var activeRole = this.state.activeRole;
    return (
      <Navbar className="myNavbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Autograder</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Navigation roles={self.state.roles} activeRole={activeRole}/>
          <Nav pullRight>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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

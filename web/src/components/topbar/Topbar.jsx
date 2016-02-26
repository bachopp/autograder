var React = require("react")

// react-bootstrap requires
var Navbar = require("react-bootstrap").Navbar
var NavItem = require("react-bootstrap").NavItem
var Nav = require("react-bootstrap").Nav

// react-router requires
var Link = require("react-router").Link
// local requires
var Dropdown = require("./Dropdown.jsx")
var LoginForm = require("../login/LoginForm.jsx")

var Socket = require("../socket.js")

// this class
var Topbar = React.createClass({
  getInitialState: function() {
    return {
      connected: false,
      roles: []
    };
  },
  chooseCourse: function(e) {
      this.setState({choosen: choosen});
      console.log(e);
  },

  componentDidMount: function() {
    var socket = this.socket = new Socket("topbar Socket connect");
    socket.on('connect', this.onConnectT);
    socket.on('navbar', this.onTopBar);
  },
  onConnectT: function() {
    this.setState({connected: true});
    console.log("topbar connected")
    this.getTopBar();
  },
  onDisconnect: function() {
    this.setState({connected: false});
  },

  onTopBar: function(data) {
    var roles = this.state.roles;
    roles = data.roles;
    this.setState({roles:roles});
  },

  getTopBar: function() {
    this.socket.emit('navbar',{username: "thomas"});
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
              <Link to="student">Student</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="login">Log in</Link>
            </li>
            <li>
              <Link to = "oauth">Github Login</Link>
            </li>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
})

module.exports = Topbar;

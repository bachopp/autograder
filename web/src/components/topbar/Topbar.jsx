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
    var ws = this.ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = this.message;
    ws.onopen = this.open;
    ws.onclose = this.close;
  },
  message: function(response) {
    if (this.state.connected===true) {
      var response = JSON.parse(response.data);
      var data = response.data
      this.setState({roles: data.roles});
    };
  },
  open: function() {
    this.setState({connected: true});
    this.getTopBar();
  },
  close: function() {
    this.setState({connected: false});
  },

  getTopBar: function() {
    var formatted = JSON.stringify({name:'navbar', data:{"username": "thomas"}});
    this.ws.send(formatted);
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

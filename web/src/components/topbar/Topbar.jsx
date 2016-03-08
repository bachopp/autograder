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
      roles: [],
      choosen: this.props.choosen,
      connected: false,
    }
  },
  chooseCourse: function(e) {
      this.setState({choosen: choosen});
  },
  componentWillMount: function() {
    this.websocket = new WebSocket("ws://localhost:8000/ws");
    this.websocket.onopen = this.open;
    this.websocket.onclose = this.close;
    this.websocket.onmessage = this.message;
  },
  open: function() {
    this.setState({connected: true});
    var formatted = JSON.stringify({name:'navbar', data:{"username": "thomas"}});
    this.websocket.send(formatted);
  },
  close: function() {
    this.setState({connected: false});
  },
  message: function(response) {
    var data = JSON.parse(response.data).data;
    this.setState({roles: data.roles});
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

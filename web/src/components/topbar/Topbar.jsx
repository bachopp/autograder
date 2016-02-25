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

var Request = function(requestType,requestedElement,fromURL,requestedURL,username,password) {
  this.requestType = requestType;
  this.requestedElement = requestedElement;
  this.fromURL = fromURL;
  this.requestedURL = requestedURL;
  this.username = username;
  this.password = password;
}


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
    var socket = new Socket()
    socket.on('connect', this.onConnect);
  },
  onConnect: function() {
    this.setState({connected: true});
  },
  onDisconnect: function() {
    this.setState({connected: false});
  },

  getTopBar: function() {
    var topBarRequest = new Request("element","navbar","/","/course/","thomas","darvik");
    var formatted = JSON.stringify(topBarRequest);
    this.ws.send(formatted);
  },

  showStudent: function(e) {
    if (this.state.connected) {
      this.ws.send(e.target.href);
    }
  },
  showAbout: function(e) {
    if (this.state.connected) {
      this.ws.send(e.target.href);
    }
  },

  logIn: function(e) {
    if (this.state.connected) {
      this.ws.send(e.target.href)
    }
  },

  oAuth: function(e) {
    if (this.state.connected) {
      this.ws.send(e.target.href)
    }
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
              <Link to="student" onClick={this.showStudent}>Student</Link>
            </li>
            <li>
              <Link to="about" onClick={this.showAbout}>About</Link>
            </li>
            <li>
              <Link to="login">Log in</Link>
            </li>
            <li>
              <Link to = "oauth" onClick={this.oAuth}>Github Login</Link>
            </li>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
})

module.exports = Topbar;

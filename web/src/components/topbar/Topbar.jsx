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


var Request = function(requestType,fromURL,requestedURL,username,password) {
  this.requestType = requestType;
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

  // Creates a websocket connection after the react component has been mounted.
  //
  componentDidMount: function() {
    var ws = this.ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = this.message;
    ws.onopen = this.open;
    ws.onclose = this.close;
  },

  message: function(response) {
    var responseObject = JSON.parse(response.data);
    var dropDownElements = responseObject.roles;
    this.setState({roles: dropDownElements});
  },

  getTopBar: function() {
    var topBarRequest = new Request("element","/","/course/","thomas","darvik");
    var formatted = JSON.stringify(topBarRequest);
    this.ws.send(formatted);
  },
  open: function() {
    this.setState({connected: true});
    this.getTopBar();
  },

  close: function() {
    this.setState({connected: false});
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
              <Link to="/about" onClick={this.showAbout}>About</Link>
            </li>
            <li>
              <Link to="/login" onClick={this.logIn}>Log in</Link>
            </li>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
})

module.exports = Topbar;

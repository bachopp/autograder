var React = require("react")

// react-bootstrap requires
var Modal = require("react-bootstrap").Modal
var Input = require("react-bootstrap").Input
var ButtonInput = require("react-bootstrap").ButtonInput
var Navbar = require("react-bootstrap").Navbar

// reqct-router requires
var Link = require("react-router").Link
// local requires
var LoginButton = require("./LoginButton.jsx")
// this class

var LoginForm = React.createClass({

  // not needed
  getInitialState: function() {
    return {
      login: '',
      password: '',
    };
  },

  componentDidMount: function() {
    var ws = this.ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = this.message;
    ws.onopen = this.open;
    ws.onclose = this.close;
  },

  message: function() {
    console.log("Message from server received");
  },

  open: function() {
    this.setState({connected: true});
  },

  close: function() {
    this.setState({connected: false});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    // TODO: send via websocked to server
    this.ws.send(this.state.login + ":" + this.state.password);
    this.setState({login: "", password: ""});
  },

  handleChange:function(event) {
    if (event.target.name === "login") {
      this.setState({login: event.target.value});
    } else {
      this.setState({password: event.target.value})
    }
  },

  render:function() {
    var value = this.state.value;
    return (
      <Navbar.Form>
        <form onSubmit={this.handleSubmit}>
            <Modal.Dialog>
              <Modal.Header>
                Log in to Autograder
              </Modal.Header>

                <Modal.Body>
                  <Input type="text" value={this.state.login} onChange={this.handleChange} name="login" placeholder="Login" />
                  <Input type="text" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
                </Modal.Body>

                <Modal.Footer>
                  <ButtonInput type="submit" onSubmit={this.handleSubmit}/>
                </Modal.Footer>

            </Modal.Dialog>
        </form>
      </Navbar.Form>
    )
  }
})



module.exports = LoginForm;

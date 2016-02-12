var React = require("react")

// react-bootstrap requires
var Modal = require("react-bootstrap").Modal
var Col = require("react-bootstrap").Col
var Input = require("react-bootstrap").Input

// reqct-router requires
var Link = require("react-router").Link
// local requires
var LoginButton = require("./LoginButton.jsx")
// this class

var LoginForm = React.createClass({

  getInitialState: function() {
    return (
      login: "",
      password: ""
    )
  },

  handleLogin: function() {
    // TODO: send via websocked to server
  },

  render:function() {
    var self = this;
    return (
      <Col md={6} mdPush={6} >
        <Modal.Dialog>
          <Modal.Header>
            Log in to Autograder
          </Modal.Header>

          <Modal.Body>
             <Input type="text" placeholder="Login" />
             <Input type="text" placeholder="Password" />
          </Modal.Body>

          <Modal.Footer>
            <LoginButton />
          </Modal.Footer>

        </Modal.Dialog>
      </Col>
    )
  }
})



module.exports = LoginForm;

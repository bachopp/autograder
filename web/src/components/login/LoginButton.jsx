var React = require("react")

// react-bootstrap requires
var Button = require("react-bootstrap").Button
// react-router requires
var Link = require("react-router").Link

// local requires

// this class

var LoginButton = React.createClass({
  propTypes: {
    login: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    handleLogin: React.PropTypes.func.isRequired
  },

// class methods

  render:function() {
    var self = this;

    return (
      <Link to="/">
        <Button onClick={this.handleLogin}>Log in </Button>
      </Link>
    )
  }
})


module.exports = LoginButton;

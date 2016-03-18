var React = require("react")

// react-bootstrap requires
var ButtonInput = require("react-bootstrap").ButtonInput
// react-router requires
var Link = require("react-router").Link

// local requires

// this class

var LoginButton = React.createClass({
  propTypes: {
    login: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
  },


// class methods
  handleClick: function(e) {
    e.preventDefault();
    var login = this.props.login;
    var password = this.props.password;
    var handleSubmit = this.props.handleSubmit;
    handleSubmit(login, password);
  },

  render:function() {
    var self = this;

    return (
      <Link to="/">
        <ButtonInput type="submit" onClick={this.handleClick}>Log in </ButtonInput>
      </Link>
    )
  }
})


module.exports = LoginButton;

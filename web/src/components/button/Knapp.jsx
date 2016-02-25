var React = require("react")

// react-bootstrap requires
var Modal = require("react-bootstrap").Modal
var Button = require("react-bootstrap").Button
// react-router requires
var Link = require("react-router").Link
// this class

var About = React.createClass({
  handleMe: function(event) {
  },
  render: function() {
    var self = this;
    return (
      <div>
          <Button>Close</Button>
      </div>
    )
  }
})


module.exports = About;

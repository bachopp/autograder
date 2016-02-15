var React = require("react")

// react-bootstrap requires
var Modal = require("react-bootstrap").Modal
var Button = require("react-bootstrap").Button
// react-router requires
var Link = require("react-router").Link
// this class

var About = React.createClass({
  handleMe: function(event) {
    console.log("hello, world");
  },
  render: function() {
    var self = this;
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header>About</Modal.Header>
          <Modal.Body>
            This is just about page.
            Move along.
            //<Button onClick={self.props.onClick}>Hello fucker</Button>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/">
              <Button>Close</Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
})


module.exports = About;

var React = require("react")

// react-bootstrap requires
var Modal = require("react-bootstrap").Modal
var Button = require("react-bootstrap").Button
// react-router requires
var Link = require("react-router").Link
// this class

var Student = React.createClass({
  handleMe: function(event) {
    console.log("hello, world");
  },
  render: function() {
    var self = this;
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header>Student</Modal.Header>
          <Modal.Body>
            This is the Student name
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


module.exports = Student;

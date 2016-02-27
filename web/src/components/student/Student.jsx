var React = require("react")

// react-bootstrap requires
var Button = require("react-bootstrap").Button
var Col = require("react-bootstrap").Col
var Grid = require("react-bootstrap").Grid
var Row = require("react-bootstrap").Row
// react-router requires
var Link = require("react-router").Link
// local requires

var CenterWrapper = require("../centerWrapper/CenterWrapper.jsx")

var Student = React.createClass({
  getInitialState: function() {
    return {
      connected: false,
      roles: []
    }
  },

  componentDidMount: function() {
    var ws = this.ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = this.message;
    ws.onopen = this.open;
    ws.onclose = this.close;
  },
  message: function(response) {
    if (this.state.connected===true) {
      var response = JSON.parse(response.data);
      var data = response.data
      this.setState({roles: data.roles});
    };
  },
  open: function() {
    this.setState({connected: true});
    this.getCourses();
  },
  close: function() {
    this.setState({connected: false});
  },

  getCourses: function() {
    var formatted = JSON.stringify({name:'student', data:{"username": "thomas"}});
    this.ws.send(formatted);
  },

  render: function() {
    var self = this;
    var courses = this.state.courses;
    var roles = this.state.roles;

    return (
      <Col>
        <Col xs={12} md={12}>
          <h1>View courses</h1>
        </Col>
        <Col xs={12} md={12}>
          <CenterWrapper roles={roles}/>
        </Col>

      </Col>
    )
  }
})


module.exports = Student;

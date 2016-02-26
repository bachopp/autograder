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

var Socket = require("../socket.js")

var Student = React.createClass({
  getInitialState: function() {
    return {
      connected: false,
      roles: [],
    }
  },

  componentDidMount: function() {
    var socket = this.socket = new Socket("student Socket connect");
    socket.on('connect', this.onConnectS);
    socket.on('disconnect', this.onDisconnect);
    socket.on('student', this.onStudent);
  },

  onConnectS: function() {
    this.setState({connected: true})
    console.log("student connected");
    this.socket.emit('student',{username: "thomas"})
  },
  onDisconnect: function() {
    this.setState({connected: false})
  },
  onStudent: function(data) {
    var roles = this.state.roles
    roles = data.roles;
    this.setState({roles:roles});
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

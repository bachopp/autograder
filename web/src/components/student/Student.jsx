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
  componentWillMount: function() {

    console.log(this.props);


    this.websocket = new WebSocket("ws://localhost:8000/ws");
    this.websocket.onopen = this.open;
    this.websocket.onclose = this.close;
    this.websocket.onmessage = this.message;
  },
  open: function() {
    this.setState({connected: true});
    var formatted = JSON.stringify({name:'student', data:{'username':'thomas'}});
    this.websocket.send(formatted);
  },
  close: function() {
    this.setState({connected: false});
  },
  message: function(response) {
    var data = JSON.parse(response.data).data;
    this.setState({roles: data.roles});
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

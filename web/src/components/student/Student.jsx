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

var Request = function(requestType,requestedElement,fromURL,requestedURL,username,password) {
  this.requestType = requestType;
  this.requestedElement = requestedElement;
  this.fromURL = fromURL;
  this.requestedURL = requestedURL;
  this.username = username;
  this.password = password;
}



var Student = React.createClass({
  getInitialState: function() {
    return {
      connected: false,
      studentCourses: [{}]
    }
  },
  open: function() {
    this.setState({connected: true});
    var topBarRequest = new Request("element","navbar","/","/course/","thomas","darvik");
    var formatted = JSON.stringify(topBarRequest);
    this.ws.send(formatted);
  },
  close: function() {
    this.setState({connected: false});
  },
  message: function(response) {
    var self = this;
    var responseObject = JSON.parse(response.data);
    var theRoles = responseObject.roles;

    for(var i = 0; i<theRoles.length; i++) {
      currentRole = theRoles[i];
      if(currentRole.Mode == "student") {
        var courses = currentRole.Courses;
        self.setState({studentCourses: courses});
      }
    }
  },
  componentDidMount: function() {
    var ws = this.ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = this.message;
    ws.onopen = this.open;
    ws.onclose = this.close;
  },
  render: function() {
    var self = this;
    var studentCourses = this.state.studentCourses;

    return (
      <Col>
        <Col xs={12} md={12}>
          <h1>View courses</h1>
        </Col>
        <Col xs={12} md={12}>
          <CenterWrapper courses={studentCourses}/>
        </Col>

      </Col>
    )
  }
})


module.exports = Student;

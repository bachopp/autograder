var React = require("react");
// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

// local
var StudentSideNav = require("../components/StudentSideNav/StudentSideNav.jsx");
var CourseNav = require("../components/CourseNav/CourseNav.jsx");

// stores
var CoursesStore = require("../stores/CoursesStore.js");

function getStateFromStores(mode) {
  return {
    courses: CoursesStore.getCoursesForMode(mode),
  };
}

var StudentMode = React.createClass({

  getInitialState: function() {

    return getStateFromStores("student");
  },

  componentDidMount: function() {
    CoursesStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CoursesStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var self = this;
    var courses = this.state.courses;
    return(
      <Row>
        <Col xs={2}>
          <StudentSideNav/>
        </Col>
        <Col xs={10}>
          <Col xs={12}>
              <Col xs={7} className="infoboxleft">
                <CourseNav courses={courses}/>
              </Col>
              <Col xs={5} className="infoboxright">
                <Col xs={6}><b>Student DAT100</b></Col>
                <Col xs={6}><b>Mar 29, 12:21</b></Col>
              </Col>
          </Col>

          {this.props.children}
        </Col>
      </Row>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores("student"));
  }
});

module.exports = StudentMode;

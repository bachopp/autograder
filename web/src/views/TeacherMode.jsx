var React = require("react");
// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

// local
var TeacherSideNav = require("../components/TeacherSideNav/TeacherSideNav.jsx");
var CourseNav = require("../components/CourseNav/CourseNav.jsx");

// stores
var CoursesStore = require("../stores/CoursesStore.js");

function getStateFromStores(mode) {
  return {
    courses: CoursesStore.getCoursesForMode(mode),
  };
}

var TeacherMode = React.createClass({

  getInitialState: function() {
    return getStateFromStores("teacher");
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
          <TeacherSideNav/>
        </Col>
        <Col xs={10}>
          <Col xs={12}>
              <Col xs={7}>
                <CourseNav courses={courses}/>
              </Col>
              <Col xs={5} className="infoboxright">
                <Col xs={6}><b>Teacher DAT100</b></Col>
                <Col xs={6}><b>Mar 29, 12:21</b></Col>
              </Col>
          </Col>

          {this.props.children}
        </Col>
      </Row>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores("teacher"));
  }
});

module.exports = TeacherMode;

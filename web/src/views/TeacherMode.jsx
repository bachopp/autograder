var React = require("react");
// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

// actions
var TopBarActionCreators = require("../actions/TopBarActionCreators.js");

// local
var TeacherSideNav = require("../components/TeacherSideNav/TeacherSideNav.jsx");
var CourseNav = require("../components/CourseNav/CourseNav.jsx");
var InfoBar = require("../components/InfoBar/InfoBar.jsx");

// stores
var CourseNavStore = require("../stores/CourseNavStore.js");
var CoursesStore = require("../stores/CoursesStore.js");

function getStateFromStores() {
  return {
    courses: CourseNavStore.getCoursesForMode(),
  };
}

const mode = "teacher";

var TeacherMode = React.createClass({

  getInitialState: function() {
    TopBarActionCreators.receiveUserCourses(mode);
    return getStateFromStores();
  },

  componentDidMount: function() {
    CourseNavStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CourseNavStore.removeChangeListener(this._onChange);
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
                <InfoBar infoType="Teacher DAT100"/>
              </Col>
          </Col>

          {this.props.children}
        </Col>
      </Row>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = TeacherMode;

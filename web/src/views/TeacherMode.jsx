var React = require("react");
// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

// actions
var TopBarActionCreators = require("../actions/TopBarActionCreators.js");

// API
var CourseNavAPI = require("../utils/CourseNavAPI.js");

// local
var TeacherSideNav = require("../components/TeacherSideNav/TeacherSideNav.jsx");
var CourseNav = require("../components/CourseNav/CourseNav.jsx");
var InfoBar = require("../components/InfoBar/InfoBar.jsx");

// stores
var CourseNavStore = require("../stores/CourseNavStore.js");
var CoursesStore = require("../stores/CoursesStore.js");
var SideNavStore = require("../stores/SideNavStore.js");

const mode = "teacher";

function getStateFromStores() {
  return {
    courses: CourseNavStore.getCoursesForMode(),
    currentCourse: CourseNavStore.getActiveCourse(),
    lastCourse: CourseNavStore.getActiveCourse(),
    activeElement: SideNavStore.getActiveElement(),
  };
}

var TeacherMode = React.createClass({

  getInitialState: function() {
    CourseNavAPI.getCoursesForMode(mode);
    return getStateFromStores();
  },

  componentDidMount: function() {
    CourseNavStore.addChangeListener(this._onChange);
    SideNavStore.addChangeListener(this._onChange);

    TopBarActionCreators.receiveUserCourses(mode);
  },

  componentWillUnmount: function() {
    CourseNavStore.removeChangeListener(this._onChange);
    SideNavStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var self = this;
    var courses = this.state.courses;
    var infoType = "Teacher " + this.state.currentCourse;
    var activeElement = this.state.activeElement;
    var lastCourse = this.state.lastCourse;
    return(
      <Row>
        <Col xs={2}>
          <TeacherSideNav lastCourse={lastCourse} activeElement={activeElement}/>
        </Col>
        <Col xs={10}>
          <Col xs={12}>
              <Col xs={7}>
                <CourseNav courses={courses} mode={mode}/>
              </Col>
              <Col xs={5} className="infoboxright">
                <InfoBar infoType={infoType}/>
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

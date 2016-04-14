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

// const
var constants = require('../constants/constants.js');
var mode = constants.mode;
// local
var TeacherSideNav = require("../components/TeacherSideNav/TeacherSideNav.jsx");
var CourseNav = require("../components/CourseNav/CourseNav.jsx");
var InfoBar = require("../components/InfoBar/InfoBar.jsx");

// stores
var UsersStore = require("../stores/UsersStore.js");
var CoursesStore = require("../stores/CoursesStore.js");
var SideNavStore = require("../stores/SideNavStore.js");

// const mode = "teacher";
const user = "tokams"

function getStateFromStores() {
  return {
    courses: UsersStore.getCoursesForMode(mode.Teacher),
    currentCourse: UsersStore.getActiveCourse(),
    activeElement: SideNavStore.getActiveElement(),
    nav: SideNavStore.getActiveElement(),
  };
}

var TeacherMode = React.createClass({

  getInitialState: function() {
    // CourseNavAPI.getCoursesForMode(mode, user);
    return getStateFromStores();
  },

  componentDidMount: function() {
    TopBarActionCreators.receiveUserCourses(mode.Teacher);
    UsersStore.addChangeListener(this._onChange);
    SideNavStore.addChangeListener(this._onChange);

    // TopBarActionCreators.receiveUserCourses(mode);
  },

  componentWillUnmount: function() {
    UsersStore.removeChangeListener(this._onChange);
    SideNavStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var self = this;
    var courses = this.state.courses;
    var infoType = "Teacher " + this.state.currentCourse;
    var activeElement = this.state.activeElement;

    return(
      <Row>
        <Col xs={2}>
          <TeacherSideNav courses={courses} activeElement={activeElement}/>
        </Col>
        <Col xs={10}>
          <Col xs={12}>
              <Col xs={7}>
                <CourseNav courses={courses} mode={mode.Teacher}/>
              </Col>
              <Col xs={5} className="infoboxright">
                <InfoBar infoType={infoType} nav={self.state.nav}/>
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

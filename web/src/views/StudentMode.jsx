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
var InfoBar = require("../components/InfoBar/InfoBar.jsx");

// actions
var TopBarActionCreators = require("../actions/TopBarActionCreators.js");
// API
var CourseNavAPI = require("../utils/CourseNavAPI.js");
// stores
var CourseNavStore = require("../stores/CourseNavStore.js");

function getStateFromStores() {
  return {
    courses: CourseNavStore.getCoursesForMode(),
  };
}

const mode = "student";

var StudentMode = React.createClass({

  getInitialState: function() {
    CourseNavAPI.getCoursesForMode(mode);
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
          <StudentSideNav/>
        </Col>
        <Col xs={10}>
          <Col xs={12}>
              <Col xs={7}>
                <CourseNav courses={courses}/>
              </Col>
              <Col xs={5} className="infoboxright">
                <InfoBar infoType="Student DAT100"/>
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

module.exports = StudentMode;

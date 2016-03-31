var React = require("react");
// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;
var ButtonToolbar = require("react-bootstrap").ButtonToolbar;

// local
var AdminSideNav = require("../components/AdminSideNav/AdminSideNav.jsx");
var CourseNav = require("../components/CourseNav/CourseNav.jsx");
// actions
var TopBarActionCreators = require("../actions/TopBarActionCreators.js");

// stores
var CoursesStore = require("../stores/CoursesStore.js");

function getStateFromStores() {
  return {
    courses: CoursesStore.getCoursesForMode(),
  };
}

var AdminMode = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
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
          <AdminSideNav/>
        </Col>
        <Col xs={10}>
          <Col xs={12}>
              <Col xs={7}>
                <CourseNav courses={courses}/>
              </Col>
              <Col xs={5} className="infoboxrightadmin">
                <Col xs={6}><b>Admin Panel</b></Col>
                <Col xs={6}><b>Mar 29, 12:21</b></Col>
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

module.exports = AdminMode;

var React = require("react");
// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

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
              <Col xs={7} className="infoboxleft">
                <CourseNav courses={courses}/>
              </Col>
              <Col xs={5} className="infoboxright">
                INFO
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

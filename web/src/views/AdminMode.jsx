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
var InfoBar = require("../components/InfoBar/InfoBar.jsx");
// actions
var TopBarActionCreators = require("../actions/TopBarActionCreators.js");

// stores
var CourseNavStore = require("../stores/CourseNavStore.js");

function getStateFromStores() {
  return {
    courses: CourseNavStore.getCoursesForMode(),
  };
}

var AdminMode = React.createClass({

  getInitialState: function() {
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
          <AdminSideNav/>
        </Col>
        <Col xs={10}>
          <Col xs={12} className="admininfobox">
                <InfoBar infoType="Admin page" />
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

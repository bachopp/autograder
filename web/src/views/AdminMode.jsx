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
var UsersStore = require("../stores/UsersStore.js");
var SideNavStore = require("../stores/SideNavStore.js");

function getStateFromStores() {
  return {
    courses: UsersStore.getCoursesForMode(),
    nav: SideNavStore.getActiveElement(),
  };
}

var AdminMode = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    UsersStore.addChangeListener(this._onChange);
    SideNavStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UsersStore.removeChangeListener(this._onChange);
    SideNavStore.removeChangeListener(this._onChange);
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
                <InfoBar infoType="Admin page" nav={self.state.nav}/>
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

var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Panel = require("react-bootstrap").Panel;

// stores
var TeacherGroupsStore = require("../stores/TeacherGroupsStore.js");
var UsersStore = require("../stores/UsersStore.js");
// actions
var SideNavActionCreators = require("../actions/SideNavActionCreators.js");

// local
var TeacherSideNav = require("../components/TeacherSideNav/TeacherSideNav.jsx");
var StudentAvailableSelector = require("../components/StudentAvailableSelector/StudentAvailableSelector.jsx");
var GroupSelector = require("../components/GroupSelector/GroupSelector.jsx");

// constants
const _nav = "groups";

function getStateFromStores() {
   return {
    query: '',
    students: TeacherGroupsStore.getAllStudents(),
    groups: TeacherGroupsStore.getAllGroups(),
  };
};

var TeacherGroups = React.createClass({


  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    TeacherGroupsStore.addChangeListener(this._onChange);
    UsersStore.addChangeListener(this._onChange);

    SideNavActionCreators.changeActiveSideElement(_nav);
  },

  componentWillUnmount: function() {
    TeacherGroupsStore.removeChangeListener(this._onChange);
    UsersStore.removeChangeListener(this._onChange);
  },

  render: function() {
    self = this;
    return(
      <Col xs={12}>
        <Col xs={7} className="infoboxleft">
            <StudentAvailableSelector students={self.state.students}/>
        </Col>
        <Col xs={5} className="infoboxright">
            <GroupSelector groups={self.state.groups}/>
        </Col>
      </Col>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = TeacherGroups;

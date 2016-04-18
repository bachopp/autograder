var React = require("react");
// react-bootstrap
var ListGroup = require("react-bootstrap").ListGroup;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;

// stores
var TeacherGroupsStore = require("../../stores/TeacherGroupsStore.js");

// actions
var TeacherGroupsActionCreators = require("../../actions/TeacherGroupsActionCreators.js");

// API
var StudentAvailableSelectorAPI = require("../../utils/StudentAvailableSelectorAPI.js");

// local
var StudentAvailableSelectorElement = require("./StudentAvailableSelectorElement.jsx");
var StudentAvailableSelectorSearch = require("./StudentAvailableSelectorSearch.jsx");


function getStateFromStores() {
   return {
    query: '',
    students: TeacherGroupsStore.getAllStudents(),
  };
};

// this className
var StudentAvailableSelector = React.createClass({

  getInitialState: function() {
    StudentAvailableSelectorAPI.getAllStudents();
    return getStateFromStores();
  },

  componentDidMount: function() {
    TeacherGroupsStore.addChangeListener(this._onChange);
  },

// three hours of debugging becouse componentWill/u/Unmount
  componentWillUnmount: function() {
    TeacherGroupsStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var students = this.state.students;
    var self = this;
    return (
        <div>
          <StudentAvailableSelectorSearch
          query={self.state.query}
          searchFor={self._searchFor}
          />

          <ListGroupItem>
            <Row>
              <Col lg={3} xsHidden={true} smHidden={true} mdHidden={true}>
                <b>Username</b>
              </Col>
              <Col lg={3} md={4} sm={6} xs={6}>
                <b>Full name</b>
              </Col>
              <Col lg={3} md={4} xsHidden={true} smHidden={true}>
                <b>Student number</b>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroup>
          {
            students.map( function(student) {
              return(
                  <StudentAvailableSelectorElement
                  key={student.studentNumber}
                  student={student}
                  handleClick={self._onAddToGroup.bind(self, student)}
                  />
              );
            })
          }
          </ListGroup>
        </div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  _onAddToGroup: function(student) {
    TeacherGroupsActionCreators.addStudentToGroup(student);
  },

  _searchFor: function(event) {
    this.setState({query: event.target.value})
    TeacherGroupsActionCreators.searchForStudent(event.target.value);
  }
});

module.exports = StudentAvailableSelector;

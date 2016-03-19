var React = require("react");
// react-bootstrap
var ListGroup = require("react-bootstrap").ListGroup;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;

// stores
var StudentSelectorStore = require("../../stores/StudentSelectorStore.js");

// actions
var StudentSelectorActionCreators = require("../../actions/StudentSelectorActionCreators.js");

// API
var StudentSelectorAPI = require("../../utils/StudentSelectorAPI.js");

// local
var StudentSelectorElement = require("./StudentSelectorElement.jsx");
var StudentSelectorSearch = require("./StudentSelectorSearch.jsx");


function getStateFromStores() {
  return {
    query: '',
    students: StudentSelectorStore.getAllStudents(),
  };
};

var StudentSelector = React.createClass({

  getInitialState: function() {
    StudentSelectorAPI.getAllStudents();
    return getStateFromStores();
  },

  componentDidMount: function() {
    StudentSelectorStore.addChangeListener(this._onChange);
  },

  componentWillunmount: function() {
    StudentSelectorStore.addChangeListener(this._onChange);
  },

  render: function() {
    var students = this.state.students;
    var self = this;
    return(
      <div>
        <StudentSelectorSearch
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
                  <StudentSelectorElement
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
    StudentSelectorActionCreators.addStudentToGroup(student);
  },

  _searchFor: function(event) {
    this.setState({query: event.target.value})
    StudentSelectorActionCreators.searchForStudent(event.target.value);
  }
});

module.exports = StudentSelector;

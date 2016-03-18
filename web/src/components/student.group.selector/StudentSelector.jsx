var React = require("react");
// react-bootstrap
var ListGroup = require("react-bootstrap").ListGroup;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

// stores
var StudentSelectorStore = require("../../stores/StudentSelectorStore.js");

// actions
var StudentSelectionActionCreators = require("../../actions/StudentSelectorActionCreators.js");

// API
var StudentSelectorAPI = require("../../utils/StudentSelectorAPI.js");

// local
var StudentSelectorElement = require("./StudentSelectorElement.jsx");

function getStateFromStores() {
  return {
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
          <ListGroup>
          {
            students.map( function(student) {
              return(
                  <StudentSelectorElement key={student.studentNumber} student={student} handleClick={self._onAddToGroup.bind(self, student)}/>
              );
            })
          }
          </ListGroup>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  _onAddToGroup: function(student) {
    StudentSelectionActionCreators.addStudentToGroup(student)
  }
});

module.exports = StudentSelector;

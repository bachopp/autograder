var React = require("react");

var Col = require("react-bootstrap").Col;
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Table = require("react-bootstrap").Table;
var Button = require("react-bootstrap").Button;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var LabViewStore = require("../../stores/LabViewStore.js");
var LabViewCourseActions = require("../../actions/LabViewCourseActions.js");

var StudentRow = require("./StudentRow.jsx");

var PropTypes = React.PropTypes;
var StudentResultsList = React.createClass({
  PropTypes: {
    students: PropTypes.array,
    selectedStudent: PropTypes.object,
  },
  _getStudentsFromStore: function() {
    // more methods should be added here
    return {
      students: LabViewStore.getStudentLabs(),
    }
  },
  _handleClick: function() {
  },
  _onChange: function() {
    this.setState(this._getStudentsFromStore());
  },
  getInitialState: function() {
    LabViewCourseActions.receiveStudentlabs();
    return this._getStudentsFromStore();
  },
  componentWillMount: function() {
    LabViewStore.addChangeListener(this._onChange);
  },
  componentWillUnMount: function() {
    LabViewStore.removelistener(this._onChange);
  },
  render: function() {

  const innerSearch = <Glyphicon glyph="search"/>;
    return(
          <Col>
            <Col xs={12}>
              <Input
                type="text"
                addonBefore={innerSearch}
                placeholder="Search for students"
              />
            </Col>
            <Col xs={12}>
              <Table className="cleanTable" striped={true}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Slipdays</th>
                    <th>Lab 1</th>
                    <th>Lab 2</th>
                    <th>Lab 3</th>
                    <th>Lab 4</th>
                    <th>Lab 5</th>
                    <th>Lab 6</th>
                  </tr>
                </thead>
                <tbody>

                  {this.state.students.map(function(student,index) {
                    return <StudentRow key={"studentRow" + index} student={student}/>
                  },this)}
                </tbody>
              </Table>
            </Col>

          </Col>
    )}
});

module.exports = StudentResultsList;

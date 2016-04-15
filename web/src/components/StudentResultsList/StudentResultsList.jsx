var React = require("react");

var Col = require("react-bootstrap").Col;
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Table = require("react-bootstrap").Table;
var Button = require("react-bootstrap").Button;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var LabViewStore = require("../../stores/LabViewStore.js");
var LabViewCourseActionCreators = require("../../actions/LabViewCourseActionCreators.js");

var StudentRow = require("./StudentRow.jsx");
var SearchField = require("./SearchField.jsx");

// this is static function, no _ and no this.* on calling it
function getStatesFromStore() {
  return {
    // these are public functions of other classes, without _
    students: LabViewStore.getStudentLabs(),
  };
}

var StudentResultsList = React.createClass({

  // these are super functions of React so no _
  getInitialState: function() {
    //LabViewCourseActionCreators.receiveStudentlabs();
    return getStatesFromStore();
  },
  componentDidMount: function() {
    LabViewStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    LabViewStore.removeChangeListener(this._onChange);
  },
  render: function() {

    if(!this.state.students || this.state.students.length == 0) {
      var ifElement = <h4>No students found</h4>;
    } else {
      var ifElement = <Table className="tables" striped={true} responsive={true} bordered={true}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Slipdays</th>
            <th>Lab 1</th>
            <th>Lab 2</th>
            <th>Lab 3</th>
            <th>Lab 4</th>
            <th>Lab 5</th>
          </tr>
        </thead>
        <tbody>
          {this.state.students.map(function(student,index) {
            return <StudentRow key={"studentRow" + index} student={student}/>
          },this)}
        </tbody>
      </Table>;
    }
    return(
          <Col>
            <Col xs={12}>
              <SearchField />
            </Col>
            <Col xs={12} className="symbols">
              <Glyphicon className="symbolApproved" glyph="glyphicon glyphicon-stop"/> Approved
              <br/>
              <Glyphicon className="symbolNotApproved" glyph="glyphicon glyphicon-stop"/> Not approved
            </Col>
            <Col xs={12}>
              {ifElement}
            </Col>

          </Col>
    )},
    // this is private function - with _ , usually placed after render to distinguish form super
    _onChange: function() {
      this.setState(getStatesFromStore());
    },
});

module.exports = StudentResultsList;

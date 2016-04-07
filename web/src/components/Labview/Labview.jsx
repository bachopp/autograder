var React = require("react");
var ReactDOM = require("react-dom");

var Col = require("react-bootstrap").Col;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var ButtonToolbar = require("react-bootstrap").ButtonToolbar;
var Button = require("react-bootstrap").Button;
var Alert = require("react-bootstrap").Alert;
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Table = require("react-bootstrap").Table;
var ProgressBar = require("react-bootstrap").ProgressBar;

var LabViewStore = require("../../stores/LabViewStore.js");
var LabViewCourseActions = require("../../actions/LabViewCourseActions.js");

var Statusbar = require("./Statusbar.jsx");
var Buildlog = require("./Buildlog.jsx");

var Labview = React.createClass({
  _getDataFromStore: function() {
    return {
      lab: LabViewStore.getSelectedStudentLab(),
      student: LabViewStore.getSelectedStudent(),
    }
  },
  _onChange: function() {
    this.setState(this._getDataFromStore);
  },
  _handleClick: function() {
    LabViewCourseActions.toggleApprovalStudentLab();
  },
  getInitialState: function() {
    return this._getDataFromStore()
  },
  componentDidMount: function() {
    LabViewStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    LabViewStore.removeChangeListener(this._onChange);
  },
  render: function() {
    const successIcon = <i className="fa fa-check fa-fw"></i>;
    const dangerIcon = <i className="fa fa-times fa-fw"></i>;
    var theLab = this.state.lab;
    var theStudent = this.state.student;

    if(theLab.approved) {
      labApproval = <Alert bsStyle="success">{successIcon} Approved</Alert>;
      statusButton = <Button onClick={this._handleClick} bsStyle="danger">Remove approval</Button>;
    } else if(!theLab.approved) {
      labApproval = <Alert bsStyle="danger">{dangerIcon} Not approved</Alert>;
      statusButton = <Button onClick={this._handleClick} bsStyle="success">Approve</Button>
    }

    return(
      <Col>
        <h3>{theLab.title} - {theStudent.firstName} {theStudent.lastName}</h3>
        <Statusbar percent={theLab.percent}/>
        {labApproval}
        <Col className="bottomPadding">
          <ButtonToolbar>
            {statusButton}
            <Button bsStyle="info">Rebuild</Button>
          </ButtonToolbar>
        </Col>
        <Col>
          <Buildlog log={theLab.log}/>
        </Col>
      </Col>
    );
  }
});





module.exports = Labview;

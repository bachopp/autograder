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


var ListGroup = require("react-bootstrap").ListGroup;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

var FormGroup = require("react-bootstrap").FormGroup;
var ControlLabel = require("react-bootstrap").ControlLabel;
var FormControl = require("react-bootstrap").FormControl;
var InputGroup = require("react-bootstrap").InputGroup;

var LabViewStore = require("../../stores/LabViewStore.js");
var LabViewCourseActionCreators = require("../../actions/LabViewCourseActionCreators.js");

var Statusbar = require("./Statusbar.jsx");
var Buildlog = require("./Buildlog.jsx");

const successIcon = <i className="fa fa-check fa-fw"></i>;
const dangerIcon = <i className="fa fa-times fa-fw"></i>;

function getDataFromStore() {
  return {
    student: LabViewStore.getSelectedStudent(),
    lab: LabViewStore.getSelectedStudentLab(),    //  [student id, lab id]
    isExpanded: LabViewStore.getExpandedStatus(),
    isRunning: false,
    buildID: Math.floor(Math.random() * (50 - 15) + 15),
  }
}

var Labview = React.createClass({
  propTypes: {
    isStudent: React.PropTypes.bool,
  },
  onChange: function() {

    this.setState(getDataFromStore());

  },
  handleClick: function() {
    LabViewCourseActionCreators.toggleApprovalStudentLab();
  },
  handleExpand: function() {
    LabViewCourseActionCreators.toggleLabExpand();
  },
  triggerBuild: function() {
    this.setState({isRunning: true});

    var lastID = this.state.buildID+1;
    this.setState({buildID: lastID});

    setTimeout(() => {
      this.setState({isRunning: false});
    },2000);

  },
  getInitialState: function() {
    return getDataFromStore();
  },
  componentDidMount: function() {
    LabViewStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    LabViewStore.removeChangeListener(this.onChange);
  },
  render: function() {
    var currentStudent = this.state.student;
    var currentLab;

    var buildID = 1082;

    if(currentStudent) {
      var currentLab = currentStudent.labs[this.state.lab[1]];
    }

    (this.state.isExpanded) ? expandedButtonText="Minimize log" : expandedButtonText="Expand log";

    // check if the lab exists
    if(!currentLab) {
      ifElement = <Col><p>Lab not found</p></Col>
    } else {
      // the student lab exists
      if(currentLab.approved) {
        // the lab is approved
        labApproval = <Alert className="approved" bsStyle="success">{successIcon} Approved</Alert>;
        if (!this.props.isStudent) {
          statusButton = <Button onClick={this.handleClick} bsStyle="danger">Remove approval</Button>;
        } else {
          statusButton = <div></div>;
        }

      } else {
        // the lab is not approved
        labApproval = <Alert className="notApproved" bsStyle="danger">{dangerIcon} Not approved</Alert>;
        if (!this.props.isStudent) {
          statusButton = <Button onClick={this.handleClick} bsStyle="success">Approve</Button>;
        } else {
          statusButton = <div></div>;
        }
      }
      var ifElement = <Col>
        <h3>{currentLab.title} - {this.state.student.firstName} {this.state.student.lastName}</h3>
        <Statusbar percent={currentLab.percent}/>
        {labApproval}
        <Col className="bottomPadding">
          <ButtonToolbar>
            {statusButton}
            <Button
              bsStyle="info"
              onClick={!this.state.isLoading ? this.triggerBuild : null}
              disabled={this.state.isRunning}>
                {!this.state.isRunning ? 'Build' : 'Building...'}
              </Button>
            <Button bsStyle="default" onClick={this.handleExpand} className="pull-right">{expandedButtonText}</Button>
          </ButtonToolbar>
        </Col>
        <Col>
          <Buildlog isExpanded={this.state.isExpanded} log={currentLab.log}/>
        </Col>
        <ListGroup>
          <ListGroupItem>Passed tests: <b>11</b>/17</ListGroupItem>
          <ListGroupItem>Failed tests: <b>6</b>/17</ListGroupItem>
          <ListGroupItem>Build date: <b>Today</b></ListGroupItem>
          <ListGroupItem>Build ID: <b>{this.state.buildID}</b></ListGroupItem>
        </ListGroup>
      </Col>
    }
    return(
      <Col>
        {ifElement}
      </Col>
    );
  }
});

module.exports = Labview;

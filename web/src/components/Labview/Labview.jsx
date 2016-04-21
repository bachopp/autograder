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

var FormGroup = require("react-bootstrap").FormGroup;
var ControlLabel = require("react-bootstrap").ControlLabel;
var FormControl = require("react-bootstrap").FormControl;
var InputGroup = require("react-bootstrap").InputGroup;

var LabViewStore = require("../../stores/LabViewStore.js");
var LabViewCourseActionCreators = require("../../actions/LabViewCourseActionCreators.js");

var Statusbar = require("./Statusbar.jsx");
var Buildlog = require("./Buildlog.jsx");

var Labview = React.createClass({
  propTypes: {
    isStudent: React.PropTypes.bool,
  },
  _getDataFromStore: function() {
    return {
      lab: LabViewStore.getSelectedStudentLab(),
      student: LabViewStore.getSelectedStudent(),
      isExpanded: LabViewStore.getExpandedStatus()
    }
  },
  _onChange: function() {
    this.setState(this._getDataFromStore);
  },
  _handleClick: function() {
    LabViewCourseActionCreators.toggleApprovalStudentLab();
  },
  handleExpand: function() {
    LabViewCourseActionCreators.toggleLabExpand();
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

    /*
      Dirty code... fix later
    */

    if(this.state.isExpanded) {
      expandedButtonText = "Minimize log";
      expandedComponent = <Col className="bottomMargin">
        <h4>Comment</h4>
        <Input type="text" placeholder="Comment on the lab"/>
        <Button>Comment</Button>
      </Col>;

      logfile = this.state.lab.log;

    } else {
      expandedButtonText = "Expand log";
      expandedComponent = "";

      logfile = this.state.lab.log.slice(0,7);

    }

    console.log(logfile);

    if(this.state.lab.length == 0) {

      ifElemet = <Col><p>Not found</p></Col>;

    } else {

      var theLab = this.state.lab;
      var theStudent = this.state.student;

      if(this.state.lab.approved) {

        labApproval = <Alert className="approved" bsStyle="success">{successIcon} Approved</Alert>;
        if (!this.props.isStudent) {
          statusButton = <Button onClick={this._handleClick} bsStyle="danger">Remove approval</Button>;
        } else {
          statusButton = <div></div>;
        }
      } else {
        labApproval = <Alert className="notApproved" bsStyle="danger">{dangerIcon} Not approved</Alert>;
        if (!this.props.isStudent) {
          statusButton = <Button onClick={this._handleClick} bsStyle="success">Approve</Button>;
        } else {
          statusButton = <div></div>;
        }
      }

      var ifElement = <Col><h3>{theLab.title} - {theStudent.firstName} {theStudent.lastName}</h3>
      <Statusbar percent={theLab.percent}/>
        {labApproval}
        <Col className="bottomPadding">
          <ButtonToolbar>
            {statusButton}
            <Button bsStyle="info">Rebuild</Button>
            <Button onClick={this.handleExpand} className="pull-right outlineButton" bsStyle="default">{expandedButtonText}</Button>
          </ButtonToolbar>
        </Col>
      <Col>
        {expandedComponent}
        <Buildlog log={logfile}/>
      </Col></Col>;
    }

    return(
      <Col>
        {ifElement}
      </Col>
    );
  }
});





module.exports = Labview;

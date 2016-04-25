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

function getDataFromStore() {
  return {
    student: LabViewStore.getSelectedStudent(),
    lab: LabViewStore.getSelectedStudentLab(),
    isExpanded: LabViewStore.getExpandedStatus(),
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
    const successIcon = <i className="fa fa-check fa-fw"></i>;
    const dangerIcon = <i className="fa fa-times fa-fw"></i>;

    if(this.state.isExpanded == true) {
      expandedButtonText = "Minimize log";
    } else {
      expandedButtonText = "Expand log";
    }




    // check if the lab exists
    if(!this.state.lab || this.state.lab.length == 0) {
      ifElement = <Col><p>Lab not found</p></Col>
    } else {
      // the student lab exists
      if(this.state.lab.approved) {
        // the lab is approved
        labApproval = <Alert className="approved" bsStyle="success">{successIcon} Approved</Alert>;
        if (!this.props.isStudent) {
          statusButton = <Button onClick={this._handleClick} bsStyle="danger">Remove approval</Button>;
        } else {
          statusButton = <div></div>;
        }

      } else {
        // the lab is not approved
        labApproval = <Alert className="notApproved" bsStyle="danger">{dangerIcon} Not approved</Alert>;
        if (!this.props.isStudent) {
          statusButton = <Button onClick={this._handleClick} bsStyle="success">Approve</Button>;
        } else {
          statusButton = <div></div>;
        }
      }

      var ifElement = <Col>
        <h3>{this.state.lab.title} - {this.state.student.firstName} {this.state.student.lastName}</h3>
        <Statusbar percent={this.state.lab.percent}/>
        {labApproval}
        <Col className="bottomPadding">
          <ButtonToolbar>
            {statusButton}
            <Button bsStyle="info">Rebuild</Button>
            <Button bsStyle="default" onClick={this.handleExpand} className="pull-right">{expandedButtonText}</Button>
          </ButtonToolbar>
        </Col>
        <Col>
          <Buildlog log={this.state.lab.log}/>
        </Col>
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

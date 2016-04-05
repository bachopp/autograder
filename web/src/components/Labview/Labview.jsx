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

var Statusbar = require("./Statusbar.jsx");
var Buildlog = require("./Buildlog.jsx");

var theLog = [
  {id: 1, text: "CI starting up on repo uis-dat320/tokamstud-labs"},
  {id: 2, text: "Cloning into '/testground/src/github.com/uis-dat320/labs'..."},
  {id: 3, text: "Cloning into '/testground/src/github.com/uis-dat320/labs-test'..."},
  {id: 4, text: "=== RUN TestThreadAG"},
  {id: 5, text: ""},
  {id: 6, text: "TestThreadAG: 4/4 cases passed"},
  {id: 7, text: "--- PASS: TestThreadAG (0.00s)"},
  {id: 8, text: "PASS"},
  {id: 9, text: "ok github.com/uis-dat320/labs/lab5 0.006s"}
];


var Labview = React.createClass({
  _getSelectedLabFromStore: function() {
    return {
      lab: LabViewStore.getSelectedStudentLab()
    }
  },
  _onChange: function() {
    this.setState(this._getSelectedLabFromStore);
  },
  getInitialState: function() {
    return this._getSelectedLabFromStore()
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

    console.log(theLab.approved);

    if(theLab.approved) {
      labApproval = <Alert bsStyle="success">{successIcon} Approved</Alert>;
    } else {
      labApproval = <Alert bsStyle="danger">{dangerIcon} Not approved</Alert>;
    }

    return(
      <Col>
        <h3>{theLab.title} - Ola Nordmann</h3>
        <Statusbar percent={theLab.percent}/>
        {labApproval}
        <Col className="bottomPadding">
          <ButtonToolbar>
            <Button bsStyle="danger">Remove approval</Button>
            <Button bsStyle="info">Rebuild</Button>
          </ButtonToolbar>
        </Col>
        <Col>
          <Buildlog log={theLab.log}/>
        </Col>
      </Col>
    );
  },
  componentDidMount: function() {

  }
});





module.exports = Labview;

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
  getInitialState: function() {
    return null
  },
  componentWillUnmount: function() {
  },
  render: function() {
    const successIcon = <i className="fa fa-check fa-fw"></i>;
    return(
      <Col>
        <h3>Lab 1 - Ola Nordmann</h3>
        <Statusbar percent={65}/>
        <Alert bsStyle="success">{successIcon} Approved</Alert>
        <Col className="bottomPadding">
          <ButtonToolbar>
            <Button bsStyle="danger">Remove approval</Button>
            <Button bsStyle="info">Rebuild</Button>
          </ButtonToolbar>
        </Col>
        <Col>
          <Buildlog log={theLog}/>
        </Col>
      </Col>
    );
  },
  componentDidMount: function() {

  }
});





module.exports = Labview;

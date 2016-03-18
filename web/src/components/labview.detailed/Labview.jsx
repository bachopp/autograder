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
  {id: 1, text: "Starting log"},
  {id: 2, text: "Running: test.go"},
  {id: 3, text: "Building..."},
  {id: 4, text: "Test case 1: OK"},
  {id: 5, text: "Test case 2: OK"},
  {id: 6, text: "Test case 3: FAIL"},
  {id: 7, text: "Test case 4: OK"},
  {id: 8, text: "Lab total cases: OK"}
];


var Labview = React.createClass({
  getInitialState: function() {
    return null
  },
  render: function() {
    const successIcon = <i className="fa fa-check fa-fw"></i>;
    return(
      <Col xs={12} className="whitebox">
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

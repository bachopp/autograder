var React = require("react");
var ReactDOM = require("react-dom");

var Col = require("react-bootstrap").Col;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var ButtonToolbar = require("react-bootstrap").ButtonToolbar;
var Button = require("react-bootstrap").Button;
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Table = require("react-bootstrap").Table;
var ProgressBar = require("react-bootstrap").ProgressBar;


var Statusbar = require("./Statusbar.jsx");
var Buildlog = require("./Buildlog.jsx");

var theLog = [
  {id: 1, text: "Starting log"},
  {id: 2, text: "Starting log"},
  {id: 3, text: "Starting log"},
  {id: 4, text: "Starting log"},
  {id: 5, text: "Starting log"},
  {id: 6, text: "Starting log"},
  {id: 7, text: "Starting log"},
  {id: 8, text: "Starting log"}
];


var Labview = React.createClass({
  getInitialState: function() {
    return null
  },
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    return(
      <Col xs={12}>
        <h3>Lab 1 - Ola Nordmann</h3>
        <Statusbar percent={65}/>
        <p>Not approved</p>
        <ButtonToolbar>
          <Button bsStyle="default">Approve</Button>
          <Button bsStyle="info">Rebuild</Button>
        </ButtonToolbar>
        <Buildlog log={theLog}/>
      </Col>
    );
  },
  componentDidMount: function() {

  }
});





module.exports = Labview;

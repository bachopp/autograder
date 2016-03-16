var React = require("react");
var ReactDOM = require("react-dom");

var Col = require("react-bootstrap").Col
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var ButtonToolbar = require("react-bootstrap").ButtonToolbar;
var Button = require("react-bootstrap").Button;
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Table = require("react-bootstrap").Table;
var ProgressBar = require("react-bootstrap").ProgressBar;


var Statusbar = requir("./Statusbar.jsx");
var Buildlog = requir("./Buildlog.jsx");

var Labview = React.createClass({
  getInitialState: function() {

  },
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    return(
      <Col xs={3}>
        <h3>Lab 1 - Ola Nordmann</h3>
        <Statusbar percent={65}/>
        <p>Not approved</p>
        <ButtonToolbar>
          <Button bsStyle="default">Approve</Button>
          <Button bsStyle="info">Rebuild</Button>
        </ButtonToolbar>
        <Buildlog/>
      </Col>
    );
  },
  componentDidMount: function() {

  }
});

module.exports = Labview;

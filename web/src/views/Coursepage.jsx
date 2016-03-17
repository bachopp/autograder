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
var Row = require("react-bootstrap").Row;


var Sidepanel = require("../components/side.navigation/Sidepanel.jsx");
var Listview = require("../components/student.listview/Listview.jsx");
var Coursetabs = require("../components/coursenavigation/Coursetabs.jsx");


var Labview = require("../components/labview.detailed/Labview.jsx");
// local components

var Coursepage = React.createClass({
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;

    return(
      <Row>
        <Col xs={2}>
          <Sidepanel/>
        </Col>
        <Col xs={6}>
          <Listview/>
        </Col>
        <Col xs={4}>
          <Labview/>
        </Col>
      </Row>
    );
  }
});

module.exports = Coursepage;

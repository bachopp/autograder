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

// actions
var SideNavActionCreators = require("../actions/SideNavActionCreators.js");

var StudentResultsList = require("../components/StudentResultsList/StudentResultsList.jsx");

var Labview = require("../components/Labview/Labview.jsx");
// local components
// constants
const _nav = "results";
// this class
var Coursepage = React.createClass({

  componentDidMount: function() {
    SideNavActionCreators.changeActiveSideElement(_nav);
  },

  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;

    return(
      <Col xs={12}>
        <Col xs={7} className="infoboxleft">
            <StudentResultsList/>
        </Col>
        <Col xs={5} className="infoboxright">
            <Labview/>
        </Col>
      </Col>
    );
  }
});

module.exports = Coursepage;

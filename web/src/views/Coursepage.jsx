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

// stores
var LabViewStore = require("../stores/LabViewStore.js");

// actions
var SideNavActionCreators = require("../actions/SideNavActionCreators.js");

var StudentResultsList = require("../components/StudentResultsList/StudentResultsList.jsx");

var Labview = require("../components/Labview/Labview.jsx");
// local components
// constants
const _nav = "results";
// this class

function getStatesFromStore() {
  return {
    isExpanded: LabViewStore.getExpandedStatus()
  }
}

var Coursepage = React.createClass({

  _onChange: function() {
    this.setState(getStatesFromStore());
  },
  getInitialState: function() {
    //LabViewCourseActionCreators.receiveStudentlabs();
    return getStatesFromStore();
  },
  componentWillUnmount: function() {
    LabViewStore.removeChangeListener(this._onChange);
  },
  componentDidMount: function() {
    LabViewStore.addChangeListener(this._onChange);
    SideNavActionCreators.changeActiveSideElement(_nav);
  },
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;

    if(this.state.isExpanded) {
      resultSize = 5;
      labSize = 7;
    } else {
      resultSize = 7;
      labSize = 5;
    }

    return(
      <Col xs={12}>
        <Col xs={resultSize} className="infoboxleft">
            <StudentResultsList/>
        </Col>
        <Col xs={labSize} className="infoboxright">
            <Labview/>
        </Col>
      </Col>
    );
  }
});

module.exports = Coursepage;

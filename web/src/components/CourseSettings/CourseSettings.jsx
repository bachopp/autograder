var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires

// react-bootstrap requires
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;
var PanelGroup = require("react-bootstrap").PanelGroup;
var Panel = require("react-bootstrap").Panel;
var Input = require("react-bootstrap").Input;
var Button = require("react-bootstrap").Button;

// actions
var SideNavActionCreators = require("../../actions/SideNavActionCreators.js");

// local components requires
var StandardSettings = require("./StandardSettings.jsx");
var CIOptions = require("./CIOptions.jsx");
var Assignments = require("./Assignments.jsx");

// funcitons

// constants
const _nav = "settings";
// this class
var CourseSettings = React.createClass({

	componentDidMount: function() {
		SideNavActionCreators.changeActiveSideElement(_nav)
	},

	render: function(){
		var self = this;
		return (
      <Col xs={12} className="whitebox">
        <Col xs={4}>
					<StandardSettings/>
        </Col>
				<Col xs={4}>
					<Assignments/>
        </Col>
				<Col xs={4}>
					<CIOptions/>
        </Col>
      </Col>
		)
	}
});

module.exports = CourseSettings;

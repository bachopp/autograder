var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires

// react-bootstrap requires
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;
var Jumbotron = require("react-bootstrap").Jumbotron;
// stores
var UsersStore = require("../../stores/UsersStore.js");

// local components requires
var LinkPanel = require("./LinkPanel.jsx");
// actions
var SideNavActionCreators = require("../../actions/SideNavActionCreators.js");
// funcitons
function getStateFromStores() {
	return {
		course: UsersStore.getActiveCourse()
	}
}
// constants
const _nav = "info";
// this class
var CourseInfo = React.createClass({
	getInitialState: function() {
	  return getStateFromStores();
	},

	componentDidMount: function() {
		SideNavActionCreators.changeActiveSideElement(_nav);
		UsersStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		UsersStore.removeChangeListener(this._onChange);
	},

	render: function(){
		return (
			<Col xs={12}>
        <Col xs={7} className="infoboxleft">
					<h1>{this.state.course}</h1>
					<p>Course name</p>
					<p>Course information</p>
        </Col>
        <Col xs={5} className="infoboxright">
						<LinkPanel/>
        </Col>
      </Col>
		)
	},

	_onChange: function() {
		this.setState(getStateFromStores());
	}
});

module.exports = CourseInfo;

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

// funcitons
function getStateFromStores() {
	return {

	}
}
// this class
var CourseMembers = React.createClass({
	// getInitialState: function() {
	//
	// },
	//
	// componentDidMount: function() {
	//
	// },
	//
	// componentWillUnmount: function() {
	//
	// },

	render: function(){
		return (
			<Col xs={12}>
        <Col xs={7} className="infoboxleft">
					<h1>DAT100</h1>
					<p>Course name</p>
					<p>Course information</p>
        </Col>
        <Col xs={5} className="infoboxright">
						<LinkPanel/>
        </Col>
      </Col>
		)
	}
});

module.exports = CourseMembers;

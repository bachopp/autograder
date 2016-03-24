var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires

// react-bootstrap requires
var Jumbotron = require("react-bootstrap").Jumbotron
var Button 		= require("react-bootstrap").Button
// local components requires

// this class
var Welcome = React.createClass({

	render: function(){
		return (
      <Jumbotron>
        <h1>404 not found</h1>
        <p>Go back</p>
      </Jumbotron>
		)
	}
});

module.exports = Welcome;

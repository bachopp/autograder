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
        <h1>Automated student feedback</h1>
        <p>Autograder provides instantaneous feedback to students on their programming assignments. It is also a valuable tool for teachers when grading lab assignments.</p>
        <p><Button bsStyle="primary" href="http://autograder.ux.uis.no/#autograder">Learn more</Button></p>
      </Jumbotron>
		)
	}
});

module.exports = Welcome;

var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires

// react-bootstrap requires
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;
var Jumbotron = require("react-bootstrap").Jumbotron;

// local components requires
var LinkPanel = require("./LinkPanel.jsx");
// funcitons

// this class
var CourseInfo = React.createClass({

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

module.exports = CourseInfo;

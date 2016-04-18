var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires

// react-bootstrap requires
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;
var ListGroup = require("react-bootstrap").ListGroup;

// local components requires

// funcitons

// this class
var LinkPanel = React.createClass({

	render: function(){
    const githubIcon = <i className="fa fa-github fa-fw fa-2x"></i>
		return (
      <div>
			<h3><b>Github links</b></h3>
				<Col xs={6}>
	        <div className="buttonify">
	        {githubIcon} Course information
	        </div>
	        <div className="buttonify">
	        {githubIcon} Individual labs
	        </div>

				</Col>
				<Col xs={6}>
	        <div className="buttonify">
	        {githubIcon} Group labs
	        </div>

				</Col>
      </div>
		)
	}
});

module.exports = LinkPanel;

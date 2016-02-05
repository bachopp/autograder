var React = require("react");
var ReactDOM = require("react-dom");
var RB = require("react-bootstrap/lib");

var TopBar = require("./navbar/TopBar.jsx");

var App = React.createClass({
	getInitialState: function(){
		var self = this;
		return {
			titleBar: this.props.titleBar
		}
	},
	render: function(){
		var self = this;
		var titleBar = self.state.titleBar;
		return(
			<div className="container-fluid">
				<TopBar titleBar={titleBar}/>
			</div>
		);	
	}
});

var titleBar = {
	title: "Autograder",
	elements: [
		{
			title: "Student",
			type:"dropdown",
			elements: [
				{link: "http:about",content:"Course 1"},
				{link: "http:about",content:"Course 2"},
				{link: "http:about",content:"Course 3"}
			]
		},
		{
			title: "Teacher",
			type:"dropdown",
			elements: [
				{link: "http:about",content:"Course 1"},
				{link: "http:about",content:"Course 2"},
				{link: "http:about",content:"Course 3"}
			]
		}
	]
};

console.log(titleBar);


ReactDOM.render(
	<App titleBar={titleBar}/>,
	document.getElementById("container")
);	

var React = require("react");
var ReactDOM = require("react-dom");
var RB = require("react-bootstrap/lib");

var TopBar = require("./navbar/TopBar.jsx");

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
				{link: "http:c1",content:"Course 1"},
				{link: "http:c2",content:"Course 2"},
				{devider:""},							// <-- hvorfor søren funker dette????
				{link: "http:c3",content:"Course 3"}
			]
		},
		{
			title: "Help",
			type:"single",
			link:"#help"
		},
		{
			title: "About",
			type:"single",
			link:"#help"
		}
	]
};

var App = React.createClass({
	getInitialState: function(){
		var self = this;
		return {
			titleBar: this.props.titleBar
		}
	},
	render: function(){
		var self = this;
		return(
			<div className="container-fluid">
				<TopBar titleBar={self.state.titleBar}/>
			</div>
		);	
	}
});



ReactDOM.render(
	<App titleBar={titleBar}/>,
	document.getElementById("container")
);	

var React = require("react");
var ReactDOM = require("react-dom");
var RB = require("react-bootstrap/lib");

var TopBar = require("./components/navbar/TopBar.jsx");

var Wrapper = React.createClass({
	render: function() {
		var self = this;
		return(
			<TopBar barObjects={self.props.barObjects}/>
		);
	}
});

var student_elements = [
	{title: "Course 1",href:"./course.html"},
	{title: "Course 2",href:"./course.html"},
	{title: "Course 3",href:"./course.html"},
	{title: "Course 4",href:"./course.html"},
	{title: "devider"},
	{title: "New course",href:"./new_course.html"}
];

var topbarData = {
	title: "Autograder",
	links: [
		{title:"Student",type:"dropdown",elements:student_elements},
		{title:"Teacher",type:"dropdown",elements:student_elements},
		{title:"Admin",type:"dropdown",elements:student_elements},
		{title:"Help",type:"link",href:"./help.html"},
		{title:"About",type:"link",href:"./about.html"},
	]
};

ReactDOM.render(
	<Wrapper barObjects={topbarData}/>,
	document.getElementById("container")
);

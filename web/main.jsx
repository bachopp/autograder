var React = require("react");
var ReactDOM = require("react-dom");
var RB = require("react-bootstrap/lib");

var TopBar = require("./components/TopBar.jsx");

var Wrapper = React.createClass({
	render: function() {
		var self = this;
		return(
			<TopBar barObjects = {self.props.barObjects}/>
		);
	}
});	

ReactDOM.render(
	<Wrapper barObjects={actionBarElements}/>,
	document.getElementById("container")
);
var student_dropdown = [
	{title:"Course 1",type:"link",href="./course1.html"},
	{title:"Course 2",type:"link",href="./course2.html"},
	{title:"devider",type:"devider"},
	{title:"New Course",type:"link",href="./new_course.html"}
];
var teacher_dropdown = [
	{title:"Course 1",type:"link",href="./course1.html"},
	{title:"Course 2",type:"link",href="./course2.html"},
	{title:"devider",type:"devider"},
	{title:"New Course",type:"link",href="./new_course.html"}
];
var admin_dropdown = [
	{title:"Course 1",type:"link",href="./course1.html"},
	{title:"Course 2",type:"link",href="./course2.html"},
	{title:"devider",type:"devider"},
	{title:"New Course",type:"link",,href="./new_course.html"}
];
var actionBarElements = [
	{title:"Student",type:"dropdown",links:[student_dropdown],href="./student.html"},
	{title:"Teacher",type:"dropdown",links:[teacher_dropdown],href="./teacher.html"},
	{title:"Admin",type:"dropdown",links:[admin_dropdown],href="./admin.html"},
	{title:"Help",type:"link",href="./helloworld.html"},
	{title:"Admin",type:"link",href="./helloworld.html"}
]
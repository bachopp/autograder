var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires
var Router = require("react-router").Router
var Route = require("react-router").Route
var browserHistory = require("react-router").browserHistory
var Link = require("react-router").Link
var IndexRoute = require("react-router").IndexRoute

// react-bootstrap requires
var Jumbotron = require("react-bootstrap").Jumbotron
var Button 		= require("react-bootstrap").Button
// local components requires
var Topbar 		= require("./components/topbar/Topbar.jsx")
var Courses 	= require("./components/courses/Courses.jsx")
var About 		=	require("./components/about/About.jsx")
var LoginForm = require("./components/login/LoginForm.jsx")
var Knapp 		= require("./components/button/Knapp.jsx")
var Welcome		= require("./components/root/Welcome.jsx")

var TeacherGroup = require("./views/TeacherGroup.jsx")
var Coursepage= require("./components/coursepage/Coursepage.jsx")
// this class

var App = React.createClass({

	componentDidMount: function() {
		// TODO: add listener from relevant stores
	},

	componentWillUnmount: function() {
		// TODO: add listener from relevant stores
	},

	render: function(){

		return (
			<div>
				<Topbar {...this.props} />
				{this.props.children}
			</div>
		)
	}
});

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App}>
		<IndexRoute component={Welcome}/>
			<Route path="/courses" component={Courses}/>

			<Route path="/admin">
				<Route path=":coursename" component={Coursepage}/>
				<Route path=":coursename/groups" component={TeacherGroup}/>
			</Route>
			<Route path="/teacher">
				<Route path=":coursename" component={Coursepage}/>
				<Route path=":coursename/groups" component={TeacherGroup}/>
			</Route>
			<Route path="/student">
				<Route path=":coursename" component={Coursepage}/>
				<Route path=":coursename/groups" component={TeacherGroup}/>
			</Route>

			<Route path="/about" component={About}/>
			<Route path="/login" component={LoginForm}/>
			<Route path="/oauth" component={Knapp}/>
		</Route>
	</Router>,
	document.getElementById("container")
);

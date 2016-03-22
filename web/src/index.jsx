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
var Welcome		= require("./components/root/Welcome.jsx")
var About 		=	require("./components/about/About.jsx")
var LoginForm = require("./components/login/LoginForm.jsx")
var Knapp 		= require("./components/button/Knapp.jsx")

var GroupManager = require("./views/GroupManager.jsx")
var Coursepage= require("./views/Coursepage.jsx")
var AllCourses = require("./views/AllCourses.jsx")
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
			<Route path="/courses" component={AllCourses}/>

			<Route path="/admin">
				<Route path=":coursename" component={Coursepage}/>
				<Route path=":coursename/groups" component={GroupManager}/>
			</Route>
			<Route path="/teacher">
				<Route path=":coursename" component={Coursepage}/>
				<Route path=":coursename/groups" component={GroupManager}/>
			</Route>
			<Route path="/student">
				<Route path=":coursename" component={Coursepage}/>
				<Route path=":coursename/groups" component={GroupManager}/>
			</Route>

			<Route path="/about" component={About}/>
			<Route path="/login" component={LoginForm}/>
			<Route path="/oauth" component={Knapp}/>
		</Route>
	</Router>,
	document.getElementById("container")
);

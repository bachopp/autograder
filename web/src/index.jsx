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
var Knapp 		= require("./components/button/Knapp.jsx")

var GroupManager = require("./views/GroupManager.jsx")
var Coursepage= require("./views/Coursepage.jsx")
var AllCourses = require("./views/AllCourses.jsx")
var StudentList = require("./views/StudentList.jsx")

var NotFound = require("./components/NotFound/NotFound.jsx")
// this class

var App = React.createClass({

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

			<Route path="admin">
				<Route path=":coursename">
					<Route path="results" component={Coursepage}/>
					<Route path="groups" component={GroupManager}/>
				</Route>
			</Route>

			<Route path="teacher">
				<Route path=":coursename">
					<Route path="results" component={Coursepage}/>
					<Route path="groups" component={GroupManager}/>
					<Route path="settings" component={GroupManager}/>
				</Route>
			</Route>

			<Route path="student">
				<Route path=":coursename">
					<Route path="results" component={Coursepage}/>
					<Route path="groups" component={GroupManager}/>
				</Route>
			</Route>

			<Route path="/about" component={About}/>
			<Route path="/oauth" component={StudentList}/>

		</Route>
	</Router>,
	document.getElementById("container")
);

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
var Topbar 		= require("./components/Topbar/Topbar.jsx")
var Welcome		= require("./components/Welcome/Welcome.jsx")

var CourseSettings = require("./components/CourseSettings/CourseSettings.jsx")
var CourseInfo = require("./components/CourseInfo/CourseInfo.jsx")

// admin
var UserList = require("./components/UserList/UserList.jsx");

// static components
var TeacherMode = require("./views/TeacherMode.jsx");
var StudentMode = require("./views/StudentMode.jsx");
var AdminMode = require("./views/AdminMode.jsx");

// views
var GroupManager = require("./views/GroupManager.jsx");
var Coursepage= require("./views/Coursepage.jsx");
var AllCourses = require("./views/AllCourses.jsx");
var StudentList = require("./views/StudentList.jsx");
var StudentResult = require("./views/StudentResult.jsx");

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
			<Route path="courses" component={AllCourses}/>

			<Route path="admin" component={AdminMode}>
				<IndexRoute component={UserList} />
				<Route path=":coursename">
					<Route path="results" component={Coursepage}/>
					<Route path="groups" component={GroupManager}/>
					<Route path="settings" component={CourseSettings}/>
					<Route path="info"component={CourseInfo}/>
				</Route>
			</Route>

			<Route path="teacher" component={TeacherMode}>
				<Route path=":coursename">
					<Route path="results" component={Coursepage}/>
					<Route path="groups" component={GroupManager}/>
					<Route path="settings" component={CourseSettings}/>
					<Route path="info"component={CourseInfo}/>
				</Route>
			</Route>

			<Route path="student" component={StudentMode}>
				<Route path=":coursename">
					<Route path="members" component={NotFound}/>
					<Route path="groups" component={NotFound}/>
					<Route path="settings" component={NotFound}/>
					<Route path="info"component={CourseInfo}/>

					<Route path="results">
						<Route path=":labid" component={StudentResult}/>
					</Route>
				</Route>
			</Route>


			<Route path="/about" component={NotFound}/>
			<Route path="/oauth" component={StudentList}/>

		</Route>
	</Router>,
	document.getElementById("container")
);

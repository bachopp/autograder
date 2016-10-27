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


// admin
var UserList = require("./components/UserList/UserList.jsx");

// static components
var TeacherMode = require("./views/TeacherMode.jsx");
var StudentMode = require("./views/StudentMode.jsx");
var AdminMode = require("./views/AdminMode.jsx");
// views
var TeacherGroups = require("./views/TeacherGroups.jsx");
var Coursepage= require("./views/Coursepage.jsx");
var AllCourses = require("./views/AllCourses.jsx");
var StudentList = require("./views/StudentList.jsx");
var NotFound = require("./components/NotFound/NotFound.jsx")

var LabView = require("./components/Labview/Labview.jsx");


// local components requires
var Topbar 		= require("./components/Topbar/Topbar.jsx")
var Welcome		= require("./components/Welcome/Welcome.jsx")
var UserManager = require("./components/UserManager/UserManager.jsx");
var UserSettings = require("./components/UserSettings/UserSettings.jsx");
var CourseMembers = require("./components/CourseMembers/CourseMembers.jsx");
var CourseSettings = require("./components/CourseSettings/CourseSettings.jsx")
var CourseInfo = require("./components/CourseInfo/CourseInfo.jsx")
var AdminSettings = require("./components/AdminSettings/AdminSettings.jsx");
var StudentGroup = require("./components/StudentGroup/StudentGroup.jsx");
var StudentList = require("./components/StudentList/StudentList.jsx");
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
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Welcome}/>
			<Route path="courses" component={AllCourses}/>

			<Route path="Admin" component={AdminMode}>
				<IndexRoute component={UserList} />
					<Route path="settings" component={AdminSettings}/>
					<Route path="info"component={NotFound}/>
			</Route>

			<Route path="Teacher" component={TeacherMode}>
					<Route path="results/:coursename" component={Coursepage}/>
					<Route path="groups/:coursename" component={TeacherGroups}/>
					<Route path="users/:coursename" component={UserManager}/>
					<Route path="settings/:coursename" component={CourseSettings}/>
					<Route path="info/:coursename" component={CourseInfo}/>
			</Route>

			<Route path="Student" component={StudentMode}>
					<Route path="results/:coursename" component={LabView}/>
					<Route path="members/:coursename" component={StudentList}/>
					<Route path="groups/:coursename" component={StudentGroup}/>
					<Route path="settings/:coursename" component={UserSettings}/>
					<Route path="info/:coursename" component={CourseInfo}/>
			</Route>

			<Route path="/about" component={NotFound}/>
			<Route path="/oauth" component={StudentList}/>

			<Route path="*" component={NotFound} />
		</Route>
	</Router>,
	document.getElementById("container")
);

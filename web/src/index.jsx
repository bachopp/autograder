var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires
var Router = require("react-router").Router
var Route = require("react-router").Route
var browserHistory = require("react-router").browserHistory
var Link = require("react-router").Link

// react-bootstrap requires

// local components requires
var Topbar 		= require("./components/topbar/Topbar.jsx")
var Courses 	= require("./components/courses/Courses.jsx")
var About 		=	require("./components/about/About.jsx")
var LoginForm = require("./components/login/LoginForm.jsx")
var Knapp 		= require("./components/button/Knapp.jsx")

var App = React.createClass({
<<<<<<< HEAD:web/src/components/index.jsx
	getInitalState: function() {
		return{
			connected: false
		}
	},
	componentWillMount: function() {
		this.websocket = new WebSocket("ws://localhost:8000/ws");
		this.websocket.onopen = this.open;
		this.websocket.onclose = this.close;
		this.websocket.onmessage = this.message;
	},
	open: function() {
		this.setState({connected: true});
		var formatted = JSON.stringify({name:'student',data:{'username':'thomas'}});
		this.websocket.send(formatted);
	},
	close: function() {
			this.setState({connected: false});
	},
	message: function(response) {
		var data = JSON.parse(response.data);
		console.log(data);
	},
=======

	componentDidMount: function() {
		// TODO: add listener from relevant stores
	},

	componentWillUnmount: function() {
		// TODO: add listener from relevant stores
	},

>>>>>>> dev:web/src/index.jsx
	render: function(){

		return (
			<div>
<<<<<<< HEAD:web/src/components/index.jsx
				<Topbar {...this.props}/>
=======
				<Topbar {...this.props} />
>>>>>>> dev:web/src/index.jsx
				{this.props.children}
			</div>
		)
	}
});

ReactDOM.render(
<<<<<<< HEAD:web/src/components/index.jsx
	<Router history={browserHistory}>
			<Route path="/" component={App}>
			<Route path="student" {...this.props} component={Student}/>
			<Route path="about" component={About}/>
			<Route path="login" component={LoginForm}/>
			<Route path="oauth" component={Knapp}/>
=======
	<Router history={browserHistory} >
		<Route path="/" component={App}>
			<Route path="/courses" component={Courses}/>
			<Route path="/about" component={About}/>
			<Route path="/login" component={LoginForm}/>
			<Route path="/oauth" component={Knapp}/>
>>>>>>> dev:web/src/index.jsx
		</Route>
	</Router>,
	document.getElementById("container")
);

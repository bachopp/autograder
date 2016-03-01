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
var Student 	= require("./components/student/Student.jsx")
var About 		=	require("./components/about/About.jsx")
var LoginForm = require("./components/login/LoginForm.jsx")
var Knapp 		= require("./components/button/Knapp.jsx")

var Socket = require("./utils/socket.js")
// this class
var App = React.createClass({

	componentDidMount: function() {
		var ws = this.ws = new WebSocket("ws://localhost:8000/ws");
		ws.onmessage = this.message;
		ws.onopen = this.open;
		ws.onclose = this.close;
		console.log(ws.onmessage);
	},

	open: function() {
		// TODO: render all routed components
		var childs = React.Children.toArray(this.props.children);

		for (var i = 0; i < childs.length; i++) {
			console.log(childs[i]);
		};
	},

	message: function() {
		// TODO: render component associated with message
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
			<Route path="/student" component={Student}/>
			<Route path="/about" component={About}/>
			<Route path="/login" component={LoginForm}/>
			<Route path="/oauth" component={Knapp}/>
		</Route>
	</Router>,
	document.getElementById("container")
);

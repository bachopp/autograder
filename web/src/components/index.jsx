var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires
var Router = require("react-router").Router
var Route = require("react-router").Route
var browserHistory = require("react-router").browserHistory
var Link = require("react-router").Link

// react-bootstrap requires

// local components requires
var Topbar = require("./topbar/Topbar.jsx")
var Student = require("./student/Student.jsx")
var About = require("./about/About.jsx")
var LoginForm = require("./login/LoginForm.jsx")

var Knapp = require("./button/Knapp.jsx")

var App = React.createClass({
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
	render: function(){
		return (
			<div>
				<Topbar {...this.props}/>
				{this.props.children}
			</div>
		)
	}
});

ReactDOM.render(
	<Router history={browserHistory}>
			<Route path="/" component={App}>
			<Route path="student" {...this.props} component={Student}/>
			<Route path="about" component={About}/>
			<Route path="login" component={LoginForm}/>
			<Route path="oauth" component={Knapp}/>
		</Route>
	</Router>,
	document.getElementById("container")
);

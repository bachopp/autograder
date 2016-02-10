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

// this class
var App = React.createClass({

	render: function(){
		return (
			<Topbar {...this.props} />
		)
	}
});


ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App}>



		</Route>
	</Router>,
	document.getElementById("container")
);

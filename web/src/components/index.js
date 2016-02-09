var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires
var Router = require("react-router").Router
var Route = requrie("react-router").Route
var Link = require("react-router").Link

// react-bootstrap requires
var Col = require("react-bootstrap/lib").Col;

// local components requires
var TopBar = requrie("./components/navbar/TopBar.jsx")
var CenterWrapperHomepage = require("./components/centerWrapper/CenterWrapperHomepage.jsx")

// this class
var App = React.createClass({
	getInitialState: function(){
		var self = this;
		return {
			titleBar: this.props.titleBar
		}
	},
	render: function(){
		var self = this;
		return(
			<Col xs={12}>
				<TopBar titleBar={self.state.titleBar}/>
				<CenterWrapperHomepage/>
			</Col>
		);
	}
});


ReactDOM.render(
	<Router>
		<Route path="/" component={App}>
			<Route path="/help" component={Help} />
			<Route path="/home" component={App} />
			<Route path="/login" component={Login}/>
		</Route>
	</Router>,
	document.getElementById("container")
);

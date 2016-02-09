var React = require("react");
var ReactDOM = require("react-dom");
var Rb = require("react-bootstrap/lib");

var TopBar = require("./navbar/TopBar.jsx");
var CenterWrapperHomepage = require("./centerWrapper/CenterWrapperHomepage.jsx");
/*
	TITLEBAR-DATA IS ADDED AS A SEPERATE SCRIPT IN THE HTML
	(this is the "json" file that will be used later on)
*/

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
			<Rb.Col xs={12}>
				<TopBar titleBar={self.state.titleBar}/>
				<CenterWrapperHomepage/>
			</Rb.Col>
		);
	}
});

ReactDOM.render(
	<App titleBar={titleBar}/>,
	document.getElementById("container")
);

var React = require("react");
var ReactDOM = require("react-dom");
var RB = require("react-bootstrap/lib");

var TopBar = require("./navbar/TopBar.jsx");

var App = React.createClass({
	getInitialState: function() {
		return {
			view: this.props.initialPage
		}
	},
	handleClick: function(page,event){
		var self = this;
		if(page == "homepage") {
			self.setState({view: "about"});
		} else {
			self.setState({view: "homepage"});
		}
	},
	render: function() {
		var self = this;
		var htmlPage = "";
		console.log(self);
		switch(self.state.view) {
			case "homepage":
				htmlPage = <div>Hello homepage <button onClick={self.handleClick.bind(this,self.state.view)}>About</button></div>;
				
				break;
			case "about":
				htmlPage = <div>Hello about page <button onClick={self.handleClick.bind(this,self.state.view)}>Home</button></div>;
				break;
		}
		return(
			<div>
				{htmlPage}
			</div>
		);
	}
});	

ReactDOM.render(
	<App initialPage={"homepage"}/>,
	document.getElementById("container")
);

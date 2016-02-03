var React = require("react");
var ReactDOM = require("react-dom");
var RB = require("react-bootstrap/lib");

var TopBar = require("./navbar/TopBar.jsx");

var Wrapper = React.createClass({
	render: function() {
		var self = this;
		return(
			<TopBar barObjects={self.props.barObjects}/>
		);
	}
});

ReactDOM.render(
	<Wrapper/>,
	document.getElementById("container")
);

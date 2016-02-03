// from $HOME_PROJECT/web/src/
require("rootpath")();


var React = require("react");
var ReactDOM = require("react-dom");



var Button = RB.Button;

var HelloWorld = React.createClass({
	render: function() {
		return(
			<div>
				<Button>Hello world</Button>
			</div>
		);
	}
});

ReactDOM.render(
	<HelloWorld/>,
	document.getElementById("container")
);
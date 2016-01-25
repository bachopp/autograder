var React = require('react')
var ReactDOM = require('react-dom')

var Welcome = React.createClass({
	render: function() {
		return(
			<div>Welcome to Autograder</div>
		);
	}
});

ReactDOM.render(
	<Wrapper />,
	document.getElementById("welcome")
);

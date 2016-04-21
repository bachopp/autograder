var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires

// react-bootstrap requires
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;
var PanelGroup = require("react-bootstrap").PanelGroup;
var Panel = require("react-bootstrap").Panel;
var Input = require("react-bootstrap").Input;
var Button = require("react-bootstrap").Button;

// local components requires

// funcitons

// this class
var CIOptions = React.createClass({
	getInitialState: function() {
		return {
			cio: false,
		}
	},

	_expand: function(ln) {
			this.setState({
				cio: !this.state.cio,
			});
	},

	render: function(){
		return (
      <div>
					<Button block onClick={this._expand}>CI Options</Button>
					<br/>
					<form>
					<Panel collapsible expanded={this.state.cio}>
						<Input disabled type="text" label="Security key" help="A secret hash value used when provinding the CI test results. The CI system will ignore all data not containing this. Need to be kept secret."/>
						<Input type="text" label="CI base path" help="The path location where student submittions will be cloned into." />

						<br/>
						<Button block bsStyle="success">Update CI</Button>
					</Panel>
					</form>
    </div>
		)
	}
});

module.exports = CIOptions;

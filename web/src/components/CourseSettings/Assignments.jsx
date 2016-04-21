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
var Dropdown = require("react-bootstrap").Dropdown;
var MenuItem = require("react-bootstrap").MenuItem;

// local components requires
var s1 = "s1";
var s1b = false;

var g1 = "g1";
var g1b = false;
// funcitons

// this class
var Assignments = React.createClass({
	getInitialState: function() {
		return {
			ass: false,
			s1b: false,
			g1b: false,
		}
	},

	_expand: function(ln) {
		if (ln == s1) {
			this.setState({
				s1b: true,
				g1b: false,
			});
		} else if (ln == g1) {
			this.setState({
				g1b: true,
				s1b: false,
			});
		} else {
			this.setState({
				ass: !this.state.ass,
			});
		}
	},

	render: function(){
		var self = this;
		console.log(this.state.ass);
		return (
      <div>
				<Button block onClick={this._expand}>Assignments</Button>
				<br/>
				<Panel collapsible expanded={this.state.ass}>
				<form>
						<b>Individual assignments</b>
						{/* the labs are mapped info got from store -> db */}
							<Panel className="buttonify" header="Lab 1" collapsible expanded={self.state.s1b} onClick={self._expand.bind(self,s1)}>
								<Input type="text" label="Folder name" />
								<Input type="text" label="Deadline" />
								<Dropdown id="dropdown-custom-2">
						      <Button bsStyle="info">
						        Primary language
						      </Button>
						      <Dropdown.Toggle bsStyle="success"/>
						      <Dropdown.Menu className="super-colors">
						        <MenuItem eventKey="1">C</MenuItem>
						        <MenuItem eventKey="2">Go</MenuItem>
						        <MenuItem eventKey="3" active>Java</MenuItem>
						      </Dropdown.Menu>
						    </Dropdown>
							</Panel>
						{/* map */}

					<br/>
					<Button block bsStyle="success">Update individual</Button>
				</form>

				<form>
						<b>Group assignments</b>

						{/* the labs are mapped info got from store -> db */}
							<Panel className="buttonify" header="Lab 1" collapsible expanded={self.state.g1b} onClick={self._expand.bind(self,g1)}>
								<Input type="text" label="Folder name" />
								<Input type="text" label="Deadline" />
								<Dropdown id="dropdown-custom-2">
									<Button bsStyle="info">
										Primary language
									</Button>
									<Dropdown.Toggle bsStyle="success"/>
									<Dropdown.Menu className="super-colors">
										<MenuItem eventKey="1">C</MenuItem>
										<MenuItem eventKey="2">Go</MenuItem>
										<MenuItem eventKey="3" active>Java</MenuItem>
									</Dropdown.Menu>
								</Dropdown>
							</Panel>
						{/* map */}


					<br/>
					<Button block bsStyle="success">Update group</Button>
				</form>
				</Panel>
    	</div>
		)
	}
});

module.exports = Assignments;

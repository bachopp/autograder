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

// funcitons

// this class
var Assignments = React.createClass({

	render: function(){
		return (
      <div>
				<Button block>Assignments</Button>
				<br/>
				<form>
					<PanelGroup defaultActiveKey="2" accordion>
						<b>Individual assignments</b>

						{/* the labs are mapped info got from store -> db */}
							<Panel header="Lab 1" eventKey="1">
								<Input type="text" label="Folder name lab 1" />
								<Input type="text" label="Deadline lab 1" />
								<Dropdown id="dropdown-custom-2">
						      <Button bsStyle="info">
						        Primary language lab 1
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

					</PanelGroup>

					<br/>
					<Button block bsStyle="success">Update individual</Button>
				</form>

				<form>
					<PanelGroup defaultActiveKey="2" accordion>
						<b>Group assignments</b>

						{/* the labs are mapped info got from store -> db */}
							<Panel header="Lab 1" eventKey="1">
								<Input type="text" label="Folder name lab 1" />
								<Input type="text" label="Deadline lab 1" />
								<Dropdown id="dropdown-custom-2">
									<Button bsStyle="info">
										Primary language lab 1
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

					</PanelGroup>

					<br/>
					<Button block bsStyle="success">Update group</Button>
				</form>
    	</div>
		)
	}
});

module.exports = Assignments;

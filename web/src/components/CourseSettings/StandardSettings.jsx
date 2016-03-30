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
var StandardSettings = React.createClass({

	render: function(){
		const userIcon = <i className="fa fa-user fa-fw"></i>;
		const groupIcon = <i className="fa fa-users fa-fw"></i>;
		return (
      <div>
					<Button block>Standard settings</Button>
					<br/>
					<form>
						<Input type="text" label="Github organization" />
						<Input type="text" label="Course name"/>
						<Row>
							<Col xs={6}>
								<Input type="checkbox" label="Private repositories"/>
							</Col>
							<Col xs={6}>
								<Input type="checkbox" label="Use code reviews"/>
							</Col>
						</Row>
						<b>Number of assignments</b>
						<Row>
							<Col xs={3}>
								<Input type="text" label={userIcon}/>
							</Col>
							<Col xs={3}>
								<Input type="text" label={groupIcon}/>
							</Col>
						</Row>
						<Input type="textarea" rows={6} label="Course description" placeholder="Description" />

						<Input type="checkbox" label="Use slip days"/>
						<Input type="text" label="Max number of allowed slip days"/>

						<br/>
						<Button block bsStyle="success">Update standard</Button>

					</form>
    </div>
		)
	}
});

module.exports = StandardSettings;

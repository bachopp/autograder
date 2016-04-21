var React = require("react");
var ReactDOM = require("react-dom");

// react-router requires

// react-bootstrap requires
var Col = require("react-bootstrap").Col;
var Button 		= require("react-bootstrap").Button
var Panel = require("react-bootstrap").Panel;
var Row = require("react-bootstrap").Row;
// local components requires
// actions
var SideNavActionCreators = require("../../actions/SideNavActionCreators.js");
var GroupSelector = require("../GroupSelector/GroupSelector.jsx");
// constants
const _nav = "not_found";
// this class
var StudentGroup = React.createClass({

	render: function(){
		const removeGroupIcon = <i className="groupmanagericons fa fa-times fa-fw fa-lg fa-border"></i>;
		const removeUserIcon = <i className="groupmanagericons fa fa-times fa-fw fa-lg fa-border"></i>;

		return (
      <Col xs={7} className="whitebox">
				<div className="groupwrapper wrapperactive aggraywrapperactive agdarkgray">
					<Panel
					className="groupheader group textc buttonify buttonactive aggraybuttonactive agdarkgray"
					block
					>
					<Row>
						<Col xs={5}>
							<b>Custom Name</b>
						</Col>
						<Col xs={5}>
							Students: 2
						</Col>
						<Col xs={2}>
							<i bsSize="xsmall">
							{removeGroupIcon}
							</i>
						</Col>
					</Row>
					</Panel>
					<Panel className="group textc buttonify buttonactive aggraybuttonactive agdarkgray " collapsible expanded={true}>
						<Col xs={6} >
						<Panel className="groupelement agdarkgray ">
								<Col xs={10}>
									Tomasz 999999
								</Col>
								<Col xs={2}>
									<i>
									{removeUserIcon}
									</i>
									</Col>
						</Panel>
						</Col>
						<Col xs={6} >
						<Panel className="groupelement agdarkgray ">
								<Col xs={10}>
									Thomas 888888
								</Col>
								<Col xs={2}>
									<i>
									{removeUserIcon}
									</i>
									</Col>
						</Panel>
						</Col>
					</Panel>
				</div>
      </Col>
		)
	}
});

module.exports = StudentGroup;

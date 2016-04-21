// -admin="": Sets up an admin user in the system. The value has to be a valid Github username.
// -clientid="": The application ID used in the OAuth process against Github. This can be generated at your settings page at Github.
// -domain="": Give the domain name for the autogradersystem.
// -help=false: List the startup options for the autograder.
// -secret="": The secret application code used in the OAuth process against Github. This can be generated at your settings page at Github.

var React = require("react");

// react-router
var Link = require("react-router").Link;

var Col = require("react-bootstrap").Col;
var Panel = require("react-bootstrap").Panel;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Jumbotron = require("react-bootstrap").Jumbotron
var Glyphicon = require("react-bootstrap").Glyphicon;
var FontAwesome = require('react-fontawesome');


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
var AdminSettings = React.createClass({

	render: function(){
		const userIcon = <i className="fa fa-user fa-fw"></i>;
		const groupIcon = <i className="fa fa-users fa-fw"></i>;
		return (
      <div>
      <Col xs={4} className="whitebox">
					<form>
						<Input type="text" label="Admin username"
              help="Sets up an admin user in the system.
               The value has to be a valid Github username."
            />
						<Input type="text" label="ClientID"
              help="The application ID used in the OAuth process against Github.
               This can be generated at your settings page at Github."
            />
            <Input type="text" label="Domain"
              help="Give the domain name for the autogradersystem."
            />
            <Input type="text" label="Secret"
              help="The secret application code used in the OAuth process against
               Github. This can be generated at your settings page at Github."
            />
						<Button block bsStyle="success">Accept initial Autograder configuration</Button>

					</form>
      </Col>
      <Col xs={6}>
      <Jumbotron>
        <h1>Automated student feedback</h1>
          <p>
            The binary file can take a number of flags to configure its behavior.
            These configurations only need to be set at first start up,
            as the system remember last configuration given.
          </p>
      </Jumbotron>
      </Col>
      </div>

		)
	}
});

module.exports = AdminSettings;

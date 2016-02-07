var React = require("react");
var ReactDOM = require("react-dom");
var Rb = require("react-bootstrap");

var Navbar = Rb.Navbar;
var Nav = Rb.Nav;
var NavItem = Rb.NavItem;
var MenuItem = Rb.MenuItem;
var NavDropdown = Rb.NavDropdown;
var Glyphicon = Rb.Glyphicon;


var CenterWrapperHomepage = React.createClass({
	getInitialState: function() {
		return null;
	},
	render: function() {
		console.log("hello");
		return(
			<Rb.Col xs={12}>
				<Rb.Grid>
					<Rb.Row>
						<Rb.Col className="whitebox" xs={3} md={3}>
							<h3>Course 1</h3>
							<p>Course 1 is the cool course</p>
							<Rb.Button bsStyle="primary">Course 1</Rb.Button>
						</Rb.Col>
						<Rb.Col className="whitebox" xs={3} md={3}>
							<h3>Course 2</h3>
							<p>A longer description for testing the text-break function.... if it works</p>
							<Rb.Button bsStyle="primary">Course 2</Rb.Button>
						</Rb.Col>
						<Rb.Col className="whitebox" xs={3} md={3}>
							<h3>Title</h3>
							<p>Description</p>
							<Rb.Button bsStyle="primary">Course 1</Rb.Button>
						</Rb.Col>
						<Rb.Col className="whitebox" xs={3} md={3}>
							<h3>Title</h3>
							<p>Description</p>
							<Rb.Button bsStyle="primary">Course 1</Rb.Button>
						</Rb.Col>
					</Rb.Row>
				</Rb.Grid>
			</Rb.Col>
		);
	}
});

module.exports = CenterWrapperHomepage;
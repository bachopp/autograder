var React = require("react");
var ReactDOM = require("react-dom");
var ReactBootstrap = require("react-bootstrap/lib");

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var NavItem = ReactBootstrap.NavItem;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;

var NavBar = React.createClass({
	getInitialState: function() {
		return null;
	},
	render: function() {
		var self = this;
		return(
			<Navbar inverse className="navbar_custom">
				<Navbar.Header>
			    	<Navbar.Brand>
			        	<a href="#">Autograder</a>
			      	</Navbar.Brand>
					<Navbar.Toggle />
			    	</Navbar.Header>
			    		<Navbar.Collapse>
			    			<Nav>
			       				<NavItem eventKey={1} href="#">Bootstrap ReactJs</NavItem>
			        			<NavItem eventKey={2} href="#">Links that we can implement here</NavItem>
			        			<NavDropdown eventKey={3} title="Teacher" id="basic-nav-dropdown">
							        <MenuItem>Hello autograder</MenuItem>
							        <MenuItem>Generated point 1</MenuItem>
							        <MenuItem>Generated point 2</MenuItem>
			         			</NavDropdown>
			      			</Nav>
			      	<Nav pullRight>
			        	<NavItem onClick={self.props.onClick} href="#">Sign in</NavItem>
			      	</Nav>
			    </Navbar.Collapse>
			  </Navbar>
		);
	}
});

var SignIn = React.createClass({
	getInitialState: function() {
		return null;
	},
	render: function() {
		var self = this;
		return(
			<div className="col-xs-12">
				<div className="col-xs-2"></div>
				<div className="col-xs-8 whitebox">
					<div className="col-xs-12 center-block text-center">
						<h4>Login to Autograder</h4>
					</div>
					<div className="col-xs-12">
						<ButtonGroup vertical block>
							<Button onClick={self.props.onClick} bsStyle="success">Login</Button>
						</ButtonGroup>
					</div>
				</div>
				<div className="col-xs-2"></div>
			</div>
		);
	}
});


var AGPage = React.createClass({
	getInitialState: function() {
		return null;
	},
	handleClick: function(element,event) {
		window.location = "http://152.94.124.172:8001/";
	},
	render: function() {
		var self = this;
		return(
			<div className="container-full">
				<NavBar onClick={self.handleClick}/>
				<SignIn onClick={self.handleClick}/>
			</div>
		);
	}
});


var list = ["Course 1", "Course 2","New Course"];

ReactDOM.render(
	<AGPage/>,
	document.getElementById("container")
);
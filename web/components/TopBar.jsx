var React = require("react");
var ReactDOM = require("react-dom");
var RB = require("react-bootstrap");

var Navbar = RB.Navbar;
var Nav = RB.Nav;
var NavItem = RB.NavItem;
var MenuItem = RB.MenuItem;
var NavDropdown = RB.NavDropdown;
var Glyphicon = RB.Glyphicon;

var TopBar = React.createClass({
	getInitialState:function(){
		return {
			barObjects	:this.props.barObjects,
			barTitle	:this.props.barTitle
			
		}
	},
	notificationSenter: function() {
		console.log("Notifications");
	},
	render:function(){
		var self = this;
		return(
			<div className="col-xs-12">
				<Navbar inverse>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">{self.state.barTitle}</a>
						</Navbar.Brand>
						<Navbar.Toggle/>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavDropdown title="Student">
								<MenuItem>Course 1</MenuItem>
								<MenuItem>Course 2</MenuItem>
								<MenuItem>Course 3</MenuItem>
								<MenuItem devider />
								<MenuItem>New Course</MenuItem>
							</NavDropdown>
							<NavDropdown title="Teacher">
								<MenuItem>Course 1</MenuItem>
								<MenuItem>Course 2</MenuItem>
								<MenuItem>Course 3</MenuItem>
								<MenuItem devider />
								<MenuItem>New Course</MenuItem>
							</NavDropdown>
							<NavDropdown title="Admin">
								<MenuItem>Course 1</MenuItem>
								<MenuItem>Course 2</MenuItem>
								<MenuItem>Course 3</MenuItem>
								<MenuItem devider />
								<MenuItem>New Course</MenuItem>
							</NavDropdown>
							<NavItem href="#">Help</NavItem>
							<NavItem href="#">About</NavItem>
						</Nav>
						<Nav pullRight>
							<NavItem href="#" onClick={self.notificationSenter}>
								<Glyphicon glyph="exclamation-sign"/> Notification
							</NavItem>
							<NavItem href="#">Sign in</NavItem>
						</Nav>	
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
});


module.exports = TopBar;
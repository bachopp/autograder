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
			barTitle	:this.props.barObjects.title
		}
	},
	notificationSenter: function() {
		console.log("Notifications");
	},
	render:function(){
		var self = this;
		var elements = self.state.barObjects.links;
		console.log(elements);
		
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

							{elements.map(function(navItem,i) {
								return(
									<NavDropdown title={navItem.title}>
										<h1>{navItem.elements}</h1>
										
										<MenuItem>Course 2</MenuItem>
										<MenuItem>Course 3</MenuItem>
										<MenuItem devider />
										<MenuItem>New Course</MenuItem>
									</NavDropdown>
								);
							})}
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
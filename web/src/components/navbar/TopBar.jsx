var React = require("react");
var ReactDOM = require("react-dom");
var RB = require("react-bootstrap");

var Navbar = RB.Navbar;
var Nav = RB.Nav;
var NavItem = RB.NavItem;
var MenuItem = RB.MenuItem;
var NavDropdown = RB.NavDropdown;
var Glyphicon = RB.Glyphicon;

var DropDownItem = React.createClass({
	getInitialState: function() {
		return {
			menuItem: this.props.menuItem
		}
	},
	render: function() {
		var self = this;
		console.log(self.state.menuItem);
		return(
			<div>Hello, world</div>
		);
		/*return(
			<NavDropdown title={dropDownTitle} id={dropDownTitle}>
				{dropDownItems.map(function(element,index) {
					return(
						<MenuItem href={element.link}>
							{element.content}
						</MenuItem>
					);
				})}
			</NavDropdown>	
		);*/
	}
});




var TopBar = React.createClass({
	getInitialState:function(){
		return{
			titleBar: this.props.titleBar
		}
	},
	notificationSenter: function() {
		console.log("Notifications");
	},
	render:function(){
		var self = this;
		var titleBar = self.state.titleBar;
		return(
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">{titleBar.title}</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						{titleBar.elements.map(function(menuItem, index){
							<DropDownItem menuItem={menuItem}/>
						})}
						<NavItem href="">Help</NavItem>
						<NavItem href="">About</NavItem>
						<DropDownItem />
					</Nav>
					<Nav pullRight>
						<NavItem>Notification</NavItem>
						<NavItem>Sign in</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
});


module.exports = TopBar;
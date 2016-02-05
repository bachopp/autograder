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
			menuItemObject: this.props.menuItemObject
		}
	},
	render: function() {
		var self = this;
		console.log(self.state.menuItemObject);
		var dropdownTitle = self.state.menuItemObject.title;
		var dropdownElements = self.state.menuItemObject.elements;
		if(self.state.menuItemObject.type == "dropdown"){
			return(
				<NavDropdown title={dropdownTitle} id={dropdownTitle + "box"}>
					{dropdownElements.map(function(menuItem, index){
						return(
							<MenuItem key={"menuitem" + index} href={menuItem.link}>
								{menuItem.content}
							</MenuItem>
						);
					})}
				</NavDropdown>
			);
		} else {
			return(
				<NavItem href={self.state.menuItemObject.link}>
					{self.state.menuItemObject.title}
				</NavItem>
			);
		}
	}
});




var TopBar = React.createClass({
	getInitialState:function(){
		return{
			titleBar: this.props.titleBar
		}
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
						{titleBar.elements.map(function(menuItemObject, index){
							return(
								<DropDownItem key={"dropdown" + index}menuItemObject={menuItemObject}/>
							);
						})}
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
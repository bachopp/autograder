var React = require("react");
var ReactDOM = require("react-dom");
var Rb = require("react-bootstrap");

var Navbar = Rb.Navbar;
var Nav = Rb.Nav;
var NavItem = Rb.NavItem;
var MenuItem = Rb.MenuItem;
var NavDropdown = Rb.NavDropdown;
var Glyphicon = Rb.Glyphicon;

var DropDownItem = React.createClass({
	getInitialState: function() {
		return {
			menuItemObject: this.props.menuItemObject
		}
	},
	render: function() {
		var self = this;
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
						{titleBar.elementsLeft.map(function(menuItemObject, index){
							return(
								<DropDownItem key={"dropdown" + index}menuItemObject={menuItemObject}/>
							);
						})}
					</Nav>
					<Nav pullRight>
						{titleBar.elementsRight.map(function(menuItemObject, index){
							return(
								<DropDownItem key={"dropdown" + index}menuItemObject={menuItemObject}/>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
});


module.exports = TopBar;
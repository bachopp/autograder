var React = require("react");
var ReactDOM = require("react-dom");

// react-bootstrap requires
var NavDropdown = require("react-bootstrap").NavDropdown;
var NavItem = require("react-bootstrap").NavItem;
var MenuItem = require("react-bootstrap").MenuItem;

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

module.exports = DropDownItem;

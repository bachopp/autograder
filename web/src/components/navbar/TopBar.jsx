var React = require("react");
var ReactDOM = require("react-dom");

// react-bootstrap requires
var Navbar = require("react-bootstrap").Navbar;
var Nav = require("react-bootstrap").Nav;
var Glyphicon = require("react-bootstrap").Glyphicon;

// local component requires
var DropDownItem = require("./DropDownItem.jsx")


// this class
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

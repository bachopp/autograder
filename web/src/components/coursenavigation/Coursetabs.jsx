var React = require("react");

var Col = require("react-bootstrap").Col;
var Nav = require("react-bootstrap").Nav;
var NavItem = require("react-bootstrap").NavItem;

var Coursetabs = React.createClass({
  render: function() {
    return(
      <Col>
        <Nav bsStyle="tabs" activeKey={1}>
          <NavItem>DAT320</NavItem>
          <NavItem>DAT210</NavItem>
          <NavItem>DAT301</NavItem>
          <NavItem>DAT120</NavItem>
        </Nav>
      </Col>
    );
  }
});


module.exports = Coursetabs;

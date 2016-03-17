var React = require("react");

var Col = require("react-bootstrap").Col;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;
var FontAwesome = require('react-fontawesome');


var Sidepanel = React.createClass({
  render: function() {
    const userIcon = <i className="fa fa-user fa-fw"></i>;
    const groupIcon = <i className="fa fa-users fa-fw"></i>;
    const infoIcon = <i className="fa fa-info fa-fw"></i>;
    const settingsIcon = <i className="fa fa-cog fa-fw"></i>;

    return(
      <Col xs={12} className="whitebox">
        <Button className="navButtonSelected" block>{userIcon} Members</Button>
        <Button className="navButton" block>{groupIcon} Groups</Button>
        <Button className="navButton" block>{infoIcon} Course info</Button>
        <Button className="navButton" block>{settingsIcon} Settings</Button>
      </Col>
    );
  }
});


module.exports = Sidepanel;

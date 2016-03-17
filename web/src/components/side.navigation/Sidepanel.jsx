var React = require("react");
var Col = require("react-bootstrap");

var Col = require("react-bootstrap").Col;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;

var Sidepanel = React.createClass({
  render: function() {
    return(
      <Col xs={12}>
        <ButtonGroup vertical block>
          <Button>Members</Button>
          <Button>Groups</Button>
          <Button>Course info</Button>
          <Button>Individual labs</Button>
        </ButtonGroup>
      </Col>
    );
  }
});


module.exports = Sidepanel;

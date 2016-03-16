var React = require("react");

var Sidepanel = React.createClass({
  render: function() {
    return(
      <Col xs={2} className="whitebox">
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

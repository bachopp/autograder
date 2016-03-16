var React = require("react");

var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;


var StudentSelectorSearch = React.createClass({

  render: function() {
    const searchs = <Glyphicon glyph="search"/>;

    return (
      <Row>
        <Col xs={7}>
          <Input type="text" addonBefore={searchs} placeholder="Search for students"/>
        </Col>
      </Row>
    );
  }
});


module.exports = StudentSelectorSearch;

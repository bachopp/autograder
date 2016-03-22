var React = require("react");

var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;


var StudentAvailableSelectorSearch = React.createClass({

  propTypes: {
    searchFor: React.PropTypes.func.isRequired, // search and setstate of query
    query: React.PropTypes.string.isRequired,
  },

  render: function() {
    var self = this;
    const searchs = <Glyphicon glyph="search" />;

    return (
      <Row>
        <Col xs={7}>
          <Input type="text"
          addonBefore={searchs}
          placeholder="Search for students"
          onChange={self.props.searchFor}
          />
        </Col>
      </Row>
    );
  }
});


module.exports = StudentAvailableSelectorSearch;

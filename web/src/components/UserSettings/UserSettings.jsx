var React = require("react");

var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;
var Button = require("react-bootstrap").Button;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Input = require("react-bootstrap").Input;
var Table = require("react-bootstrap").Table;
var Image = require("react-bootstrap").Image;

var UserSettings = React.createClass({
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    return(
      <Col xs={12}>
        <Row className="infoboxleft">
          <Col>
            <Col xs={12}>
              <h3>Avatar</h3>
                <Col xs={6} md={4}>
                  <Image src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=180&h=250" rounded />
                  <p>Change the image on Github</p>
              </Col>
            </Col>
          </Col>
        </Row>
      </Col>
    );
  }
});

module.exports = UserSettings;

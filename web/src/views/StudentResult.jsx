var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Panel = require("react-bootstrap").Panel;

// local

var StudentResultMain = require("../components/StudentResult/StudentResultMain.jsx");
var StudentResultSide = require("../components/StudentResult/StudentResultSide.jsx");

var StudentResult = React.createClass({

  render: function() {
    self = this;
    return(
      <Col xs={12}>
        <Row className="infoboxleft">
            <StudentResultMain />
        </Row>
      </Col>
    );
  },
});

module.exports = StudentResult;

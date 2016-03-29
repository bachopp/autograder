var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

// local
var Labview = require("../Labview/Labview.jsx");

var StudentResultMain = React.createClass({

  render: function() {

    return (
      <Labview />
    );
  }

});

module.exports = StudentResultMain;

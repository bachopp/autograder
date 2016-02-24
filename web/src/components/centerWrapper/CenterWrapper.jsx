var React = require("react")
//reactbootstrap
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;

var CardWrapper = require("./CardWrapper.jsx");

var CenterWrapper = React.createClass({
  propTypes: {
    courses: React.PropTypes.array
  },
  render: function() {
    var self = this;
    var courses = this.props.courses;
    return(
      <Col xs={12}>
        <CardWrapper courses={courses}/>
      </Col>
    );
  }
})

module.exports = CenterWrapper;

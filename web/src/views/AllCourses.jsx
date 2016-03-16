var React = require("react");

// react-bootstrap

// local
var Courses = require("../components/courses/Courses.jsx");

var StudentSelector = React.createClass({

  render: function() {
      return (
        <Courses />
      )
  },
});

module.exports = StudentSelector;

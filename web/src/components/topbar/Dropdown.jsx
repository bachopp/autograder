var React = require("react")

// react-bootstrap requires

// local components requries
var DropdownList = require("./DropdownList.jsx")

var Dropdown = React.createClass({
  propTypes: {
    chooseCourse: React.PropTypes.func.isRequired,
    courses: React.PropTypes.array.isRequired,
  },

  // TODO: find out how to list the dropdown lists, like if(permitted) draw...

  render:function() {
    var self = this;
    return (
      <DropdownList
        chooseCourse={self.props.chooseCourse}
        courses={self.props.courses}
      />
    );
  }
})

module.exports = Dropdown;

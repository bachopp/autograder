var React = require("react");
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;

var LabViewCourseActionCreators = require("../../actions/LabViewCourseActionCreators.js");


var SearchField = React.createClass({
  handleChange: function(event) {
    LabViewCourseActionCreators.searchStudentTable(event.target.value);
  },
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    return(
      <Input
        type="text"
        addonBefore={innerSearch}
        placeholder="Search for students"
        onChange={this.handleChange}
      />
    );
  }
},this);




module.exports = SearchField;

var React = require("react");
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;

var LabViewCourseActions = require("../../actions/LabViewCourseActions.js");


var SearchField = React.createClass({
  handleChange: function(event) {
    raw_search = event.target.value;
    LabViewCourseActions.searchStudentTable(raw_search);
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

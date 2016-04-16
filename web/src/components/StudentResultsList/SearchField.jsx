var React = require("react");
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;

var LabViewCourseActionCreators = require("../../actions/LabViewCourseActionCreators.js");


var SearchField = React.createClass({
  handleChange: function(event) {
    raw_search = event.target.value;
    LabViewCourseActionCreators.searchStudentTable(raw_search);
  },
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    return(
      <Input
        type="text"
        addonBefore={innerSearch}
        placeholder="Search for students"
        
      />
    );
  }
},this);




module.exports = SearchField;

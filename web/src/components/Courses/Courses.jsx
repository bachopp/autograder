var React = require("react")

// react-bootstrap requires
var Button = require("react-bootstrap").Button
var Col = require("react-bootstrap").Col
var Grid = require("react-bootstrap").Grid
var Row = require("react-bootstrap").Row
// react-router requires
var Link = require("react-router").Link
// local requires
var CenterWrapper = require("./CenterWrapper.jsx")

var CoursesStore = require("../../stores/CoursesStore.js");
var CoursesAPIUtils = require("../../utils/CoursesAPIUtils.js")
var NotFound = require("../NotFound/NotFound.jsx");

function getStateFromStores() {
  return {
    roles: CoursesStore.getAllCourses(),
  };
}

var Courses = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    CoursesStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CoursesStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var roles = this.state.roles;
    if (roles[0] == null) {
      return (<i/>)
    }
    return (
      <div>
      <Col xs={8} xsOffset={2}>
        <h1>View courses</h1>
      </Col>
      <Col xs={8} xsOffset={2}>
          <CenterWrapper roles={roles}/>
          {this.props.children}
      </Col>
      </div>
    )
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  },
})


module.exports = Courses;

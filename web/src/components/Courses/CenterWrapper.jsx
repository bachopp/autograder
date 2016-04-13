var React = require("react")
//reactbootstrap
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;

var CardWrapper = require("./CardWrapper.jsx");

var CenterWrapper = React.createClass({
  propTypes: {
    roles: React.PropTypes.array.isRequired,
  },
  render: function() {
    var self = this;
    var roles = this.props.roles;
    return (
      <div>
        {roles.map(function(role){
            courses = role.Courses.Courses
            return(
              <Col key={role.Mode} xs={3}>
              <h4>{role.Mode}</h4>
              <CardWrapper courses={courses} role={role.Mode}/>
              </Col>
            );
          })}
      </div>
    );
  }
})

module.exports = CenterWrapper;

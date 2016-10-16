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
        {roles.map(function(role, index){
            courses = role.Courses.Courses
            return(
              <Col key={role.Mode} xs={12}>
              <h2>{role.Mode}</h2>
                <CardWrapper courses={courses} key={index} role={role.Mode}/>
              </Col>
            );
          })}
      </div>
    );
  }
})

module.exports = CenterWrapper;

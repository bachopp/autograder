var React = require("react")
//reactbootstrap
var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;

var CardWrapper = require("./CardWrapper.jsx");

var CenterWrapper = React.createClass({
  propTypes: {
    roles: React.PropTypes.object.isRequired,
  },
  render: function() {
    var self = this;
    var roles = this.props.roles;
    var array = [];
    for (var key in roles) {
      array.push(roles[key]);
    }
    return (
      <div>
        {array.map(function(role){
            return(
              <Col key={role.Mode} xs={3}>
              <h4>{role.Mode}</h4>
              <CardWrapper courses={role.Courses} role={role.Mode}/>
              </Col>
            );
          })}
      </div>
    );
  }
})

module.exports = CenterWrapper;

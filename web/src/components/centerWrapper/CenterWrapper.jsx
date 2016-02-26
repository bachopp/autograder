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
            return(
              <Col xs={12}>
                <h4>{role.Mode}</h4>
                <CardWrapper key={role.Mode} courses={role.Courses}/>
              </Col>
            );
          })}
      </div>
    );
  }
})

module.exports = CenterWrapper;

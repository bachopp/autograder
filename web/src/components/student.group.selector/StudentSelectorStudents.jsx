var React = require("react");
// react-bootstrap
var ListGroup = require("react-bootstrap").ListGroup;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

var StudentSelectorElement = require("./StudentSelectorElement.jsx");

var StudentSelectorStudents = React.createClass({

  propTypes: {
    users: React.PropTypes.array.isRequired,
  },

  render: function() {
    users = this.props.users;
    return(
          <ListGroup>
          {
            users.map( function(user) {
              return(
                  <StudentSelectorElement key={user.studentNumber} user={user}/>
              );
            })
          }
          </ListGroup>
    );
  },
});

module.exports = StudentSelectorStudents;

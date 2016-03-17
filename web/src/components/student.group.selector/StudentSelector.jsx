var React = require("react");
// react-bootstrap
var ListGroup = require("react-bootstrap").ListGroup;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

var StudentSelectorElement = require("./StudentSelectorElement.jsx");

// mock data
var mock = require("./mock.js");

function stnr() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  Math.floor((Math.random()+1) * 200000)};
    arr.push(test);
  };
  return arr;
};

function getStateFromStores() {
  return {
    users: mock.stnr(),
  };
}

var StudentSelectorStudents = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  render: function() {
    var usrs = this.state.users;
    console.log(usrs);
    return(
          <ListGroup>
          {
            usrs.map( function(user) {
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

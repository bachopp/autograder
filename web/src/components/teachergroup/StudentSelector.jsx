var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

var StudentSelectorElement = require("./StudentSelectorElement.jsx");
var StudentSelectorStudents = require("./StudentSelectorStudents.jsx");
var StudentSelectorSearch = require("./StudentSelectorSearch.jsx");

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
    // TODO: get users from store
    users: stnr()
  };
}

var StudentSelector = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  render: function() {
    self = this;
    return(
      <Col>
        <Col xs={2} className="whitebox">
          side navbar placeholder
        </Col>

        <Col xs={5} xsOffset={1} className="whitebox">

          <StudentSelectorSearch />

            <ListGroupItem>
              <Row>
                <Col lg={3} xsHidden={true} smHidden={true} mdHidden={true}>
                  <b>Username</b>
                </Col>
                <Col lg={3} md={4} sm={6} xs={6}>
                  <b>Full name</b>
                </Col>
                <Col lg={3} md={4} xsHidden={true} smHidden={true}>
                  <b>Student number</b>
                </Col>
              </Row>
            </ListGroupItem>

          <StudentSelectorStudents users={self.state.users}/>
        </Col>

        <Col xs={3} xsOffset={1} className="whitebox">
          show groups placeholder
        </Col>
      </Col>

    );
  },
});

module.exports = StudentSelector;

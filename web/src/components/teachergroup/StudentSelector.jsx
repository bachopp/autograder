var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var StudentSelectorElement = require("./StudentSelectorElement.jsx");
var StudentSelectorStudents = require("./StudentSelectorStudents.jsx");
var StudentSelectorSearch = require("./StudentSelectorSearch.jsx");

function stnr() {
  var arr = [];
  for (var i = 0; i < 50; i++) {
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

          <Row>
            <Col lg={3} xsHidden={true} smHidden={true} mdHidden={true}>
              Username
            </Col>
            <Col lg={3} md={4} sm={6} xs={6}>
              Full name
            </Col>
            <Col lg={3} md={4} xsHidden={true} smHidden={true}>
              Student number
            </Col>
          </Row>

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

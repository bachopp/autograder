var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Panel = require("react-bootstrap").Panel;

// local

var TeacherSideNav = require("../components/TeacherSideNav/TeacherSideNav.jsx");
var StudentAvailableSelector = require("../components/StudentAvailableSelector/StudentAvailableSelector.jsx");
var GroupSelector = require("../components/GroupSelector/GroupSelector.jsx");

var GroupManager = React.createClass({

  componentWillUnmount: function() {
    console.log("GroupManager.jsx unmounted PARENT");
  },

  render: function() {
    self = this;
    return(
      <Row>
        <Col xs={2}>
          <TeacherSideNav/>
        </Col>
        <Col xs={10}>

          <Col xs={12}>
              <Col xs={7} className="infoboxleft">
                <Col cs={12}>
                  <Col xs={4}>
                  DAT100
                  </Col>
                  <Col xs={4}>
                  DAT200
                  </Col>
                  <Col xs={4}>
                  DAT300
                  </Col>
                </Col>
              </Col>
              <Col xs={5} className="infoboxright">
                INFO
              </Col>
          </Col>

          <Col xs={12}>
          <Col xs={7} className="infoboxleft">
              <StudentAvailableSelector />
          </Col>
          <Col xs={5} className="infoboxright">
              <GroupSelector/>
          </Col>
          </Col>
        </Col>
      </Row>
    );
  },
});

module.exports = GroupManager;

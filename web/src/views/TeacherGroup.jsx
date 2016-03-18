var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;

// local
var StudentSelectorElement = require("../components/student.group.selector/StudentSelectorElement.jsx");
var StudentSelectorSearch = require("../components/student.group.selector/StudentSelectorSearch.jsx");

var Sidepanel = require("../components/side.navigation/Sidepanel.jsx");
var StudentSelector = require("../components/student.group.selector/StudentSelector.jsx");
var GroupSelector = require("../components/group.manager/GroupSelector.jsx");

var TeacherGroup = React.createClass({

  render: function() {
    self = this;
    return(
      <Row>
          <Col xs={2}>
            <Sidepanel/>
          </Col>

          <Col xs={6}>
            <Col xs={12} className="whitebox">
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

              <StudentSelector />
            </Col>
          </Col>

          <Col xs={4}>
            <Col xs={12} className="whitebox">
              <GroupSelector/>
            </Col>
          </Col>
      </Row>

    );
  },
});

module.exports = TeacherGroup;

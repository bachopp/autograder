var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Panel = require("react-bootstrap").Panel;

// local

var StudentSideNav = require("../components/StudentSideNav/StudentSideNav.jsx");
var GroupSelector = require("../components/GroupSelector/GroupSelector.jsx");

var GroupManager = React.createClass({

  componentWillUnmount: function() {
    console.log("StudentList.jsx unmounted");
  },

  render: function() {
    self = this;
    return(
      <Col xs={12}>
        <Col xs={7} className="infoboxleft">
            StudentList
        </Col>
        <Col xs={5} className="infoboxright">
            StudentList
        </Col>
      </Col>
    );
  },
});

module.exports = GroupManager;

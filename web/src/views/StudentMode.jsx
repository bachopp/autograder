var React = require("react");
// react-router
var Link = require("react-router").Link;

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

// local
var StudentSideNav = require("../components/StudentSideNav/StudentSideNav.jsx");
var CourseNav = require("../components/CourseNav/CourseNav.jsx");

// mock
const courses = [{name:"DAT100"},{name:"DAT200"},{name:"DAT300"},{name:"DAT400"}];

var StudentMode = React.createClass({

  render: function() {
    self = this;
    return(
      <Row>
        <Col xs={2}>
          <StudentSideNav/>
        </Col>
        <Col xs={10}>
          <Col xs={12}>
              <Col xs={7} className="infoboxleft">
                <CourseNav courses={courses}/>
              </Col>
              <Col xs={5} className="infoboxright">
                INFO
              </Col>
          </Col>

          {this.props.children}
        </Col>
      </Row>
    );
  },
});

module.exports = StudentMode;

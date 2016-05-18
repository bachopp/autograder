var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var Input = require("react-bootstrap").Input;
var Table = require("react-bootstrap").Table;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Tooltip = require("react-bootstrap").Tooltip;
var OverlayTrigger = require("react-bootstrap").OverlayTrigger;
// local

var StudentList = React.createClass({

  _change: function() {

  },

  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    const tooltip = (
      <Tooltip><strong>Invite: testuser </strong> to group </Tooltip>
    );
    const invite = <i className="buttonify agcheck fa fa-users fa-fw fa-lg"></i>;

    return (
      <Col xs={12}>
        <Col xs={7} className="infoboxleft">
        <Col xs={12}>
          <Input
            type="text"
            addonBefore={innerSearch}
            placeholder="Search for students"
          />
        </Col>
          <Col xs={12}>
            <Table className="cleanTable" striped={true} responsive>
              <thead className="floatingtablehead">
                <tr>
                  <th>Name</th>
                  <th>Invite to group</th>
                </tr>
              </thead>
              <tbody className="scrolluserlist">
                <tr>
                  <td className="buttonify" >Name Surname</td>
                  <td className="buttonify">
                    <OverlayTrigger placement="right" overlay={tooltip}>
                      {invite}
                    </OverlayTrigger>
                  </td>
                </tr>
                <tr>
                  <td className="buttonify" >Name Surname2</td>
                  <td>
                    <OverlayTrigger placement="right" overlay={tooltip}>
                      {invite}
                    </OverlayTrigger>
                  </td>
                </tr>
                <tr>
                  <td className="buttonify" >Name Surname3</td>
                  <td>
                    <OverlayTrigger placement="right" overlay={tooltip}>
                      {invite}
                    </OverlayTrigger>
                  </td>
                </tr>
                <tr>
                  <td className="buttonify" >Name Surname4</td>
                  <td>
                    <OverlayTrigger placement="right" overlay={tooltip}>
                      {invite}
                    </OverlayTrigger>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Col>
        <Col xs={5} className="infoboxright">
          <b>Info bout user?</b>
        </Col>
      </Col>

    );
  }

});

module.exports = StudentList;

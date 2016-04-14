var React = require("react");

var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var Input = require("react-bootstrap").Input;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Row = require("react-bootstrap").Row;

var UserSettings = React.createClass({
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    return(
      <Col xs={12}>
        <Row  className="infoboxleft">
          <Col>
            <Col xs={12}>
              <Input
                type="text"
                addonBefore={innerSearch}
                placeholder="Search for students"
              />
            </Col>
            <Col xs={12}>
              <Table className="cleanTable" striped={true}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Student number</th>
                    <th>Student</th>
                    <th>Teacher</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="info">Pending</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">No</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="info">Pending</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">No</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="info">Pending</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">No</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">No</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">No</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">No</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="info">Pending</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">No</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Thomas Darvik</td>
                    <td>223344</td>
                    <td>
                      <Button bsStyle="default">Yes</Button>
                    </td>
                    <td>
                      <Button bsStyle="default">No</Button>
                    </td>
                    <td>
                      <Button bsStyle="danger">Remove</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Col>
        </Row>
      </Col>
      );
  }
});



module.exports = UserSettings;

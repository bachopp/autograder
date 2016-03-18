var React = require("react");

var Col = require("react-bootstrap").Col;
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Table = require("react-bootstrap").Table;
var Button = require("react-bootstrap").Button;
var ButtonGroup = require("react-bootstrap").ButtonGroup;

var Listview = React.createClass({
  render: function() {

    const innerSearch = <Glyphicon glyph="search"/>;

  return(
      <Col xs={12} className="whitebox">
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
                <th>Slipdays</th>
                <th>Labs (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thomas Darvik</td>
                <td>Hello, world</td>
                <td>
                  <ButtonGroup>
                    <Button bsSize="small">10</Button>
                    <Button bsSize="small">20</Button>
                    <Button bsSize="small" className="selectedCourse">30</Button>
                    <Button bsSize="small">40</Button>
                    <Button bsSize="small">50</Button>
                    <Button bsSize="small">100</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>Thomas Darvik</td>
                <td>Hello, world</td>
                <td>
                  <ButtonGroup>
                    <Button bsSize="small">10</Button>
                    <Button bsSize="small">20</Button>
                    <Button bsSize="small">30</Button>
                    <Button bsSize="small">40</Button>
                    <Button bsSize="small">50</Button>
                    <Button bsSize="small">100</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>Thomas Darvik</td>
                <td>Hello, world</td>
                <td>
                  <ButtonGroup>
                    <Button bsSize="small">10</Button>
                    <Button bsSize="small">20</Button>
                    <Button bsSize="small">30</Button>
                    <Button bsSize="small">40</Button>
                    <Button bsSize="small">50</Button>
                    <Button bsSize="small">100</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>Thomas Darvik</td>
                <td>Hello, world</td>
                <td>
                  <ButtonGroup>
                    <Button bsSize="small">10</Button>
                    <Button bsSize="small">20</Button>
                    <Button bsSize="small">30</Button>
                    <Button bsSize="small">40</Button>
                    <Button bsSize="small">50</Button>
                    <Button bsSize="small">100</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr className="tableDevider">
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td>Teacher name</td>
                <td>Test teacher 1</td>
                <td>
                  <ButtonGroup>
                    <Button bsSize="small">10</Button>
                    <Button bsSize="small">20</Button>
                    <Button bsSize="small">30</Button>
                    <Button bsSize="small">40</Button>
                    <Button bsSize="small">50</Button>
                    <Button bsSize="small">100</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>Teacher name</td>
                <td>Test teacher 2</td>
                <td>
                  <ButtonGroup>
                    <Button bsSize="small">10</Button>
                    <Button bsSize="small">20</Button>
                    <Button bsSize="small">30</Button>
                    <Button bsSize="small">40</Button>
                    <Button bsSize="small">50</Button>
                    <Button bsSize="small">100</Button>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>

      </Col>


    );
  }
});

module.exports = Listview;

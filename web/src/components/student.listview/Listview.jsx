var React = require("react");

var Col = require("react-bootstrap").Col;
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Table = require("react-bootstrap").Table;

var Listview = React.createClass({
  render: function() {

    const innerSearch = <Glyphicon glyph="search"/>;

    return(
      <Col xs={12}>
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
                <th>Labs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thomas Darvik</td>
                <td>Hello, world</td>
                <td>Mr sexypants</td>
              </tr>
              <tr>
                <td>Thomas Darvik</td>
                <td>Hello, world</td>
                <td>Mr sexypants</td>
              </tr>
              <tr>
                <td>Thomas Darvik</td>
                <td>Hello, world</td>
                <td>Mr sexypants</td>
              </tr>
              <tr>
                <td>Thomas Darvik</td>
                <td>Hello, world</td>
                <td>Mr sexypants</td>
              </tr>
            </tbody>
          </Table>
        </Col>

      </Col>


    );
  }
});

module.exports = Listview;

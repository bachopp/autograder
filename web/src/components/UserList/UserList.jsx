var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var Input = require("react-bootstrap").Input;
var Table = require("react-bootstrap").Table;
var Glyphicon = require("react-bootstrap").Glyphicon;

// local

var UserList = React.createClass({

  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    const checkMark = <i className="fa fa-check-square"></i>;
    const xMark = <i className="fa fa-times"></i>;
    const sortArrows = <i className="fa fa-sort fa-fw"></i>
    const sortArrowsAsc = <i className="fa fa-sort-asc fa-fw"></i>
    return (

        <Col xs={12}>
          <Col>
            <Row>
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
                      <th>Slipdays</th>
                      <th>Admin{sortArrowsAsc}</th>
                      <th>Teacher{sortArrows}</th>
                      <th>Student{sortArrows}</th>
                    </tr>
                  </thead>
                  <tbody className="scrolluserlist">
                    <tr>
                      <td>Name Surname</td>
                      <td>{xMark}</td>
                      <td>{checkMark}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>{xMark}</td>
                      <td>{checkMark}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>{xMark}</td>
                      <td>{checkMark}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td>{checkMark}</td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td>{checkMark}</td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td>{checkMark}</td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                    <tr>
                      <td>Name Surname</td>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td>{checkMark}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>

            </Row>
            </Col>
        </Col>




    );
  }

});

module.exports = UserList;

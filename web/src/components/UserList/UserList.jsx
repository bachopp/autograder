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
    const agcheck = "agcheck ";
    const isdisabled = "agcheckdisabled ";
    const isgreen = "agcheckgreen ";
    const neutral = isdisabled + "fa fa-check-square fa-lg ";

    const innerSearch = <Glyphicon glyph="search"/>;
    const checkMark = <i className={neutral}></i>;
    const xMark = <i className="fa fa-times fa-lg"></i>;
    const sortArrows = <i className="fa fa-sort fa-fw fa-lg"></i>
    const sortArrowsAsc = <i className="fa fa-sort-asc fa-fw fa-lg"></i>
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
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>{xMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>{xMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                </tr>
                <tr>
                  <td>Name Surname</td>
                  <td>5</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
                  <td>{checkMark}</td>
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

module.exports = UserList;

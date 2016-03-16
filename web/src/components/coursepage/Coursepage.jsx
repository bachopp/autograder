var React = require("react");
var ReactDOM = require("react-dom");

var Col = require("react-bootstrap").Col
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var ButtonToolbar = require("react-bootstrap").ButtonToolbar;
var Button = require("react-bootstrap").Button;
var Input = require("react-bootstrap").Input;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Table = require("react-bootstrap").Table;
var ProgressBar = require("react-bootstrap").ProgressBar;



var Statusbar = require("../labview.detailed/Statusbar.jsx");
var Buildlog = require("../labview.detailed/Buildlog.jsx");
// local components

var Coursepage = React.createClass({
  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    return(
      <Col>
        <Col xs={2} className="whitebox">
          <ButtonGroup vertical block>
            <Button>Members</Button>
            <Button>Groups</Button>
            <Button>Course info</Button>
            <Button>Individual labs</Button>
          </ButtonGroup>
        </Col>
        <Col xs={5} xsOffset={1} className="whitebox">
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
                  <th>Github</th>
                  <th>Full name</th>
                  <th>S</th>
                  <th>Labs in %</th>
                </tr>
              </thead>
              <tbody>
                {students.map(function(student,index) {
                  return(
                    <tr key={index}>
                      <td>{student.username}</td>
                      <td>{student.fullName}</td>
                      <td>{student.slipdays}</td>
                      <td>
                        <ButtonToolbar>
                          <ButtonGroup bsSize="small">
                            <Button>{student.labs[0].percent}</Button>
                            <Button>{student.labs[1].percent}</Button>
                            <Button>{student.labs[2].percent}</Button>
                            <Button>{student.labs[3].percent}</Button>
                            <Button>{student.labs[4].percent}</Button>
                            <Button>{student.labs[5].percent}</Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Col>
        <Col xs={3} xsOffset={1} className="whitebox">
          <h4>
            Lab 1 - Ola Nordmann
          </h4>
          <Col xs={12}>
            <Statusbar percent={40}/>
            <p>Status: <span>Not approved</span></p>
            <ButtonToolbar>
              <Button bsStyle="default">Approve</Button>
              <Button bsStyle="info">Rebuild</Button>
            </ButtonToolbar>

        </Col>
        <Col xs={12}>
          <h5>Latest build</h5>
          <p>Number of passed tests: 1</p>
          <p>Number of failed tests: 3</p>
          <p>Excecution time: 00 min 12.94 sec</p>
          <p>Build date: 12/10/2015 11:58:66</p>
          <p>Build ID: 1234</p>
        </Col>
        <Col xs={12}>
          <Buildlog/>
        </Col>
        </Col>
      </Col>
    );
  }
});


function randomNumber() {
  return Math.floor(Math.random() * 100) + 0;
}
function randomName() {
  var index = Math.floor(Math.random() * names.length) + 0;
  return names[index];
}
function randomUsername() {
  var index = Math.floor(Math.random() * usernames.length) + 0;
  return usernames[index];
}






var names = ["Thomas Darvik","Tomasz Glinecki","Ole Hansen", "Andreas Kverneland"];
var usernames = ["thomas","olebrumm","haxor", "lollipop"];






var students = [
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  },
  {
    username: randomUsername(),
    fullName: randomName(),
    slipdays: randomNumber(),
    labs: [
      {id:1, percent:randomNumber()},
      {id:2, percent:randomNumber()},
      {id:3, percent:randomNumber()},
      {id:4, percent:randomNumber()},
      {id:5, percent:randomNumber()},
      {id:6, percent:randomNumber()},
    ]
  }
];

module.exports = Coursepage;

var React = require("react");

// react-bootstrap

var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var Input = require("react-bootstrap").Input;
var Table = require("react-bootstrap").Table;
var Glyphicon = require("react-bootstrap").Glyphicon;

var UserManagerStore = require("../../stores/UserManagerStore.js");

// local
var UserRow = require("./UserRow.jsx");


const agcheck = "agcheck ";
const isdisabled = "agcheckdisabled ";
const isgreen = "agcheckgreen ";
const neutral = isdisabled + "fa fa-check-square fa-lg ";

const innerSearch = <Glyphicon glyph="search"/>;
const checkMark = <i className={neutral}></i>;
const xMark = <i className="fa fa-times fa-lg"></i>;
const sortArrows = <i className="fa fa-sort fa-fw fa-lg"></i>
const sortArrowsAsc = <i className="fa fa-sort-asc fa-fw fa-lg"></i>


function getStatesFromStore() {
  return {
    //students: UserManagerStore.getAllUsers(),
    users: UserManagerStore.getTotalUserList()
  }
}

var UserList = React.createClass({

  getInitialState: function() {
    return getStatesFromStore()
  },
  componentDidMount: function() {
    UserManagerStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    UserManagerStore.removeChangeListener(this._onChange);
  },
  render: function() {

    console.log("USERS:");
    console.log(this.state.users);
    console.log("/USERS");

    if(this.state.students.length == 0 || this.state.students == []) {
      // no users found
      var Wrapper = <h4><i>Error. No users found in "User manager store".</i></h4>;
    } else {
      var Wrapper = <Table className="tables" striped={true} responsive={true} bordered={true}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Admin</th>
            <th>Teacher</th>
            <th>Student</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(function(user,index) {
            return <UserRow key={"userRowIndex" + index} student={user}/>
          },this)}
        </tbody>
      </Table>;
    }
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
            {Wrapper}
          </Col>
        </Col>
        <Col xs={5} className="infoboxright">
          <Col xs={12}>
            <div>Extended info about the user comes here.</div>
          </Col>
        </Col>
      </Col>


    );
  },
  _onChange: function() {
    this.setState(getStatesFromStore());
  },

});

module.exports = UserList;

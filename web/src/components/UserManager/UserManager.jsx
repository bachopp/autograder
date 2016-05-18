var React = require("react");

var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;
var Input = require("react-bootstrap").Input;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Row = require("react-bootstrap").Row;

// store and actions
var UserManagerStore = require("../../stores/UserManagerStore");


// actions
var SideNavActionCreators = require("../../actions/SideNavActionCreators.js");

// constants
const _nav = "users";

function getStatesFromStore() {
  return {
    students: UserManagerStore.getStudents()
  }
}

var UserSettings = React.createClass({
  getInitialState: function() {
    return getStatesFromStore();
  },
  _change: function() {
  },
  _onChange: function(status) {
    this.setState(getStatesFromStore());
  },

  componentDidMount: function() {
    UserManagerStore.addChangeListener(this._onChange);
    SideNavActionCreators.changeActiveSideElement(_nav);
  },
  componentWillUnmount: function() {
    UserManagerStore.removeChangeListener(this._onChange);
  },

  render: function() {
    const innerSearch = <Glyphicon glyph="search"/>;
    self = this;
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
                      <Button bsStyle={this.state.bstyle} onClick={self._change.bind(self,"Pending")}>{this.state.sstat}</Button>
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

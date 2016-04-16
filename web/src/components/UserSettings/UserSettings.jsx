var React = require("react");

var Col = require("react-bootstrap").Col;
var Row = require("react-bootstrap").Row;
var Button = require("react-bootstrap").Button;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Glyphicon = require("react-bootstrap").Glyphicon;
var Input = require("react-bootstrap").Input;
var Table = require("react-bootstrap").Table;
var Image = require("react-bootstrap").Image;

// actions
var SideNavActionCreators = require("../../actions/SideNavActionCreators.js");
// constants
const _nav = "settings";
var UserSettings = React.createClass({
  componentDidMount: function() {
    SideNavActionCreators.changeActiveSideElement(_nav);
  },
  getInitialState: function() {
    return {
      isEdit: false,
      name: "Thomas Darvik",
      email: "mailto@mail.com",
      number: 112233
    }

  },
  toggleEdit: function(event) {

    if(this.state.isEdit == true) {
      buttonState
    } else {

    }

    this.setState({isEdit: !this.state.isEdit});

  },
  onChangeInput: function() {

  },
  cancelEdit: function() {

  },
  render: function() {

    //TODO: Legg til dette; https://github.com/JedWatson/classnames
    const editIcon = <i className="fa editBlue fa-pencil-square-o"></i>;

    var elements = "";

    var fullName = this.state.name;
    var email = this.state.email;
    var studentNumber = this.state.number;

    if(this.state.isEdit == false) {
      var el1 = <p>Name: {fullName}</p>;
      var el2 = <p>Email: {email}</p>;
      var el3 = <p>Student number: {studentNumber}</p>;

      buttonTitle = "Edit";
      buttonState = "default";

      var fullButtonGroup = <Col>
        <Button onClick={this.toggleEdit} bsStyle={buttonState} bsSize="small">{buttonTitle}</Button>
      </Col>


    } else {
      var el1 = <Input type="email" defaultValue={email} onChange={this.onChangeInput} />
      var el2 = <Input type="number" defaultValue={studentNumber} onChange={this.onChangeInput} />
      var el3 = <Input type="text" defaultValue={fullName} onChange={this.onChangeInput} />

      buttonTitle = "Save";
      buttonState = "success";

      var fullButtonGroup = <Col>
        <Button onClick={this.toggleEdit} bsStyle={buttonState} bsSize="small">{buttonTitle}</Button>
        <Button onClick={this.cancelEdit} bsStyle="danger" bsSize="small">Cancel</Button>
      </Col>;
    }

    return(
      <Col xs={12}>
        <Row className="infoboxleft">
          <Col>
            <Col xs={12}>
              <h3>Avatar</h3>
                <Col xs={6} md={4}>
                  <Image src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=180&h=250" rounded />
                  <p>Change the image on Github</p>
                  <Col>
                    {el1}
                    {el2}
                    {el3}
                    {fullButtonGroup}
                  </Col>
              </Col>
            </Col>
          </Col>
        </Row>
      </Col>
    );
  }
});

module.exports = UserSettings;

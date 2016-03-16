var React = require("react");
// react-bootstrap
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var StudentSelectorEmlementAdd = require("./StudentSelectorElementAdd.jsx");

var StudentSelectorElement = React.createClass({

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render: function() {
    var user = this.props.user;
    return (
    <ListGroupItem>
  		<Row>
  			<Col lg={3} xsHidden={true} smHidden={true} mdHidden={true}>
  				{user.username}
  			</Col>
  			<Col lg={3} md={4} sm={6} xs={6}>
  				{user.firstName} {user.lastName}
  			</Col>
  			<Col lg={3} md={4} xsHidden={true} smHidden={true}>
  				{user.studentNumber}
  			</Col>
  			<Col lg={3} md={4} sm={6} xs={6}>
  					<StudentSelectorEmlementAdd />
  			</Col>
  		</Row>
  	</ListGroupItem>
    );
  },

});


module.exports = StudentSelectorElement;

var React = require("react");
// react-bootstrap
var ListGroupItem = require("react-bootstrap").ListGroupItem;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var StudentSelectorElementAdd = require("./StudentSelectorElementAdd.jsx");

var StudentSelectorElement = React.createClass({

  propTypes: {
    student: React.PropTypes.object.isRequired,
    handleClick: React.PropTypes.func.isRequired,
  },

  render: function() {
    var student = this.props.student;
    var handleClick = this.props.handleClick;
    return (
    <ListGroupItem>
  		<Row>
  			<Col lg={3} xsHidden={true} smHidden={true} mdHidden={true}>
  				{student.username}
  			</Col>
  			<Col lg={3} md={4} sm={6} xs={6}>
  				{student.firstName} {student.lastName}
  			</Col>
  			<Col lg={3} md={4} xsHidden={true} smHidden={true}>
  				{student.studentNumber}
  			</Col>
  			<Col lg={3} md={4} sm={6} xs={6}>
  					<StudentSelectorElementAdd handleClick={handleClick}/>
  			</Col>
  		</Row>
  	</ListGroupItem>
    );
  },

});


module.exports = StudentSelectorElement;

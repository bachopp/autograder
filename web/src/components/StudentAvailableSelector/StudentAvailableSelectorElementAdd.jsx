var React = require("react");

var Button = require("react-bootstrap").Button;

var StudentAvailableSelectorElementAdd = React.createClass({

  propTypes: {
    handleClick: React.PropTypes.func.isRequired,
  },

  render: function() {
    var handleClick = this.props.handleClick;
    return (
        <Button block onClick={handleClick}>Add to group</Button>
    );
  },
});

module.exports = StudentAvailableSelectorElementAdd;

var React = require("react");
var Col = require("react-bootstrap").Col;
var Well = require("react-bootstrap").Well;
var Buildlog = React.createClass({
  render: function() {
    return(
      <Well className="buildLog">
        <p> 1. Starting AG</p>
        <p> 2. Running server logg</p>
        <p> 3. Red or blue pill?</p>
        <p> 4. Red or blue pill?</p>
        <p> 5. Red or blue pill?</p>
        <p> 6. Red or blue pill?</p>
        <p> 7. Red or blue pill?</p>
        <p> 8. Red or blue pill?</p>
        <p> 9. === RUN Helloworld.go</p>
        <p>10. Testing format 4/4 cases passed</p>
        <p>11. Test passed</p>
        <p>12. Lab: OK</p>
      </Well>
    );
  }
});

module.exports = Buildlog;

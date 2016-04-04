var React = require("react");

// react-bootstrap
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var InfoBar = React.createClass({

  propTypes: {
    infoType: React.PropTypes.string.isRequired,
  },

  setTime: function(){

    var currentdate = new Date();
    var hours = currentdate.getUTCHours() + 2;
    var month = currentdate.getUTCMonth();
    var day = currentdate.getUTCDate();
      // correct for number over 24, and negatives
      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      // add leading zero, first convert hours to string
      hours = hours + "";
      if( hours.length == 1 ){ hours = "0" + hours; }

      // minutes are the same on every time zone
      var minutes = currentdate.getUTCMinutes();

      // add leading zero, first convert hours to string
      minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes; }
      const mon = ["","Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      var asd = mon[month];
      seconds = currentdate.getUTCSeconds();
      console.log(hours, minutes, seconds)
      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        month: asd,
        day: day,
      });
  },
  componentWillMount: function(){
    this.setTime();
  },
  componentDidMount: function(){
     window.setInterval(function () {
      this.setTime();
    }.bind(this), 60000);
  },
  componentWillUnmount: function() {
    console.log("test");
  },
  render: function() {

    return(
      <div>
        <Col xs={6}><b>{this.props.infoType}</b></Col>
        <Col xs={6}><b>
        {this.state.month}, {this.state.day} - {this.state.hours}:{this.state.minutes}
        </b></Col>
      </div>
    )
  }
});

module.exports = InfoBar;

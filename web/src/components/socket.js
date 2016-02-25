var EventEmitter = require("events");

var Socket = function() {
  this.ws = new WebSocket("ws://localhost:8000/ws");
  this.ee = new EventEmitter();

  this.ws.onmessage = this.message;
  this.ws.onopen = this.open;
  this.ws.onclose = this.close;

  this.on = function(name, fn) {
    this.ee.on(name,fn);
  };

  this.off = function(name, fn) {
    this.ee.removeListener(name, fn);
  };

  this.emit = function(name, data) {
    var message = JSON.stringify({name, data})
    this.ws.send(message);
  };

  this.message = function(response) {
    try {
      var message = JSON.parse(response.data)
      this.ee.emit(message.name, message.data);
    }catch(err) {
      this.ee.emit('error', err)
    }
    // var responseObject = JSON.parse(response.data);
    // var dropDownElements = responseObject.roles;
    // this.setState({roles: dropDownElements});
  };
  this.open = function() {
    this.ee.emit('connect')
    // this.setState({connected: true});
    // this.getTopBar();
  };

  this.close = function() {
    this.ee.emit('disconnect')
    // this.setState({connected: false});
  };
}

module.exports = Socket;

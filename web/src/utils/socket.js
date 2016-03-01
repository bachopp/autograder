var EventEmitter = require("events").EventEmitter;
var util = require("util");

var Socket = function(inicial) {
  self = this;
  this.ws = new WebSocket("ws://localhost:8000/ws");
  this.ee = new EventEmitter();

  this.ws.onmessage = function(response) {
    try {
      var message = JSON.parse(response.data);
      self.ee.emit(message.name, message.data);
    }catch(err) {
      self.ee.emit('error', err);
    }
  };

  this.ws.onopen = function() {
    console.log(inicial)
    self.ee.emit('connect');
  };

  this.ws.onclose = function() {
    self.ee.emit('disconnect');
  };

  this.on = function(name, fn) {
    self.ee.on(name,fn);
  };

  this.off = function(name, fn) {
    self.ee.removeListener(name, fn);
  };

  this.emit = function(name, data) {
    var message = JSON.stringify({name, data});
    waitForSocketConnection(self.ws, function() {
           self.ws.send(message);
       });
    // self.ws.send(message);
  };

  function waitForSocketConnection(socket, callback){
        setTimeout(
            function(){
                if (socket.readyState === 1) {
                    if(callback !== undefined){
                        callback();
                    }
                    return;
                } else {
                    waitForSocketConnection(socket,callback);
                }
            }, 5);
    };

};

util.inherits(Socket, EventEmitter);
module.exports = Socket;

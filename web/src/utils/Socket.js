var TopBarAPIUtils = require("./TopBarAPIUtils");
var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");
var CoursesServerActionCreators = require("../actions/CoursesServerActionCreators");

var Socket =  function() {

  this.ws = new WebSocket("ws://localhost:8000/ws");

  this.message = function(payload) {
    // TODO: emit that message has arrived
    // figure out what ActionCreator to call with new data?
    var data = JSON.parse(payload.data);
    var pivot = data.name;

    switch(pivot) {
      case "navbar":
        TopBarServerActionCreators.receiveAll(data.data.roles);
        break;
      case "student":
        CoursesServerActionCreators.receiveAll(data.data.roles)
        break;
      default:
      // no action
    }
  };

  this.open = function() {
    // TODO: emit connected on open instead of wait
  };

  this.close = function() {

  };

  this.ws.onmessage = this.message;
  this.ws.onopen = this.open;
  this.ws.onclose = this.close;

  this.test = function()  {
    console.log("GOT HERE ");
  };

  // This is not good at all, but temp fix, see this.open
  this.waitForSocketConnection = function waitForSocketConnection(socket, callback){
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
      }, 1 //ms
    );
  };
};


module.exports = new Socket();

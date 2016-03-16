var TopBarAPIUtils = require("./TopBarAPIUtils");
var TopBarServerActionCreators = require("../actions/TopBarServerActionCreators");
var CoursesServerActionCreators = require("../actions/CoursesServerActionCreators");

var AGConstants = require("../constants/AGConstants");
var ActionTypes = AGConstants.ActionTypes;

var Socket =  function() {

  this.ws = new WebSocket("ws://localhost:8000/ws");

  this.message = function(payload) {
    // TODO: emit that message has arrived
    // figure out what ActionCreator to call with new data?
    var data = JSON.parse(payload.data);
    var pivot = data.actionType;

    switch(pivot) {
      case ActionTypes.RECEIVE_RAW_ROLES:
        TopBarServerActionCreators.receiveAll(data.payload.roles);
        break;
      case ActionTypes.RECEIVE_RAW_COURSES:
        CoursesServerActionCreators.receiveAll(data.payload.roles)
        break;
      default:
        // do nothing
    }
  };

  this.open = function() {
    // TODO: emit connected on open instead of wait
  };

  this.close = function() {
    // TODO:
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

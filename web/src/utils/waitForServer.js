var ws = new WebSocket("ws://localhost:8000/ws");

console.log(ws.readyState);

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
      }, 1);
};

ws.onopen = function() {
  console.log("GO ! GO ! GO !");
};

waitForSocketConnection(ws, function() {console.log("CONTINUE CODE...")})

module.exports;

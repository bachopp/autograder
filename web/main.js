// // main.js
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// ReactDOM.render(
//   <h1>Welcome to Autograder</h1>,
//   document.getElementById('example')
// );


var ws = new WebSocket("ws://localhost:8004/ws");

function foo(response) {
  var data = response.data;
  ws.send(data.login)
  ws.send(data.name)
}

var script = document.createElement('script');
script.src = 'https://api.github.com/users/tokams?callback=foo';

document.getElementsByTagName('head')[0].appendChild(script);

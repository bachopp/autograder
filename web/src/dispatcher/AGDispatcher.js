// This is flux style dispatcher that takes care of problems of
// circular dependencies that may occur when actions to dispatch wait for eatchother A->B->C->A
// this implementation only detects the circular dependencies does not fix them!

var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();

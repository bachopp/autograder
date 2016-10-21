var React = require("react");

// template logged lines.
// Edit this for different log-results
var loggedLines = [
  "TestCase1.0 4/4 tests passed",
  "Setting build log ready",
  "Downloading lab results",
  "Check test",
  "Running case 1",
  "Running case 2",
  "Running case 3",
  "Getting github.com/username/labCases",
  "Running test cases",
  "Test Case 4.01 failed",
  "Running new test",
  "Trying to get labs and test cases"
];

// shuffles the in-array around at random.
function shuffle(a) {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

// takes in an array and a number. The number represents the number
// of logs that will be generated, and the array is the template array
function generateLogs(array, number) {
  var log = [];
  for(var i = 0; i<number; i++) {
    log.push(shuffle(array));
  }
  return log;
}

var Logger = {
  generate: function() {
    return shuffle(loggedLines);
  },
};

module.exports = Logger;

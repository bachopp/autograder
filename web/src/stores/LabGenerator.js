var React = require("react");

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
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// takes in an array and a number. The number represents the number
// of logs that will be generated, and the array is the template array

function succeed() {
  return Math.floor(Math.random() * (100 - 60) + 60);
}
function failed() {
  return Math.floor(Math.random() * (60 - 30) + 30);
}

function generateLabs(count) {
  generatedLabs = [];

  for(var i = 0; i<count; i++) {
    var apporved = Math.random() >= 0.4;

    var logSample = loggedLines;

    var theLog = shuffle(logSample);

    if(apporved) {
      var percent = succeed();
    } else {
      var percent = failed();
    }
    generatedLabs.push({
      id: i,
      title: "Lab " + (i+1),    // fixing i+1 -> Starts at lab 1
      approved: apporved,        // this should be generated at random
      log: theLog,
      percent: percent,
    });
  }
  return generatedLabs;
}


var LabGenerator = {
  generate: function(count) {
    return generateLabs(count);
  },
};

module.exports = LabGenerator;

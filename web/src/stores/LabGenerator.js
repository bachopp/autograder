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


var Lab = function(id, title, approved, log, percent) {
  this.id = id;
  this.title = title;
  this.approved = approved;
  this.log = log;
  this.percent = percent;
}


// generate count-number of labs
function generateLabs(count) {
  generatedLabs = [];
  logSample = loggedLines;

  // generate labs
  for(var i = 0; i<count; i++) {
    logSample = loggedLines;
    var id = i;
    var title = "Lab " + (i+1);
    var approved = Math.random() >= 0.4;
    var percent;
    (approved) ? percent = succeed() : percent = failed();
    var log = shuffle(logSample);
    var lab = new Lab(id,title,approved, log, percent);
    generatedLabs.push(lab);
  }
  console.log(generatedLabs);
  return generatedLabs;
}

var LabGenerator = {
  generate: function(count) {
    return generateLabs(count);
  },
};

module.exports = LabGenerator;

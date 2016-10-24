var React = require("react");
var Logger = require("./Logger.js");


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
    var theLog = Logger.generate();

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

module.exports = {
  stnr: function() {
    var arr = [];
    for (var i = 0; i < 5; i++) {
      var test = {firstName: "Tomasz", studentNumber:  Math.floor((Math.random()+1) * 200000)};
      arr.push(test);
    };
    return arr;
  },
}

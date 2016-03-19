module.exports = {
  stnr: function() {
    var arr = [];
    for (var i = 0; i < 5; i++) {
      var test = {name:"group_"+i, number: i, users:[]};
      arr.push(test);
    };
    return arr;
  },
  _stnw: function(s) {
    var arr = [];
    for (var i = 0; i < s; i++) {
      var test = {firstName: "Tomasz", studentNumber:  Math.floor((Math.random()+1) * 200000)};
      arr.push(test);
    };
    return arr;
  }
}

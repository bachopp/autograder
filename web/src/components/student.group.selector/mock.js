module.exports = {
  stnr: function() {
    var arr = [];
    for (var i = 0; i < 7; i++) {
      var test = {username:"tokams", firstName: "Tomasz", lastName: "Gliniecki", studentNumber:  Math.floor((Math.random()+1) * 200000)};
      arr.push(test);
    };
    return arr;
  },
}

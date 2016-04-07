module.exports = {
  // TODO: These are used in stores to convert received data from API to whatever we need
  convertRawCourses: function(rawCourses) {
    var courses = [];
    for (var i = 0; i < rawCourses.length; i++) {
      courses.push(rawCourses[i].CourseName);
    }
    return courses;
  },
};

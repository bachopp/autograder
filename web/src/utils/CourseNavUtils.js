module.exports = {
  // TODO: These are used in stores to convert received data from API to whatever we need
  convertRawCourses: function(rawCourses) {

    var courses = [];

    // for (var i = 0; i < rawCourses.length; i++) {
    //   courses.push(rawCourses[i].CourseName);
    // }
    return courses;
  },
  convertToCourses: function(rawCourses, mode) {
    for (var key in rawCourses) {
      if (rawCourses[key].Mode == mode) {
        // console.log(rawCourses[key].Courses.Courses[0].Name);
        return rawCourses[key].Courses;
      }
    }
    return null;
  },
}

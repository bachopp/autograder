module.exports = {
  // TODO: These are used in stores to convert received data from API to whatever we need

  // @Depricated
  convertRawCourses: function(rawCourses, mode) {
    var courses = [];
    rawCourses.forEach(function(course) {
      if (course.Mode === mode) {
        course.Courses.forEach(function(str){
          courses.push(str.CourseName);
        });
      }
    });
    return courses;
  },
};

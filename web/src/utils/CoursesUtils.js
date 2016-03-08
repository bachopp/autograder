module.exports = {
  // TODO: These are used in stores to convert received data from API to whatever we need
  convertRawCourses: function(rawCourses) {
    return {
      mode: rawCourses.Mode,
      courses: rawCourses.Courses,
    };
  },
};

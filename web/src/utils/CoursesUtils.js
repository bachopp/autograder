module.exports = {
  // TODO: Create helper methods for type conversion ets
  convertRawCourses: function(rawCourses) {
    return {
      mode: rawCourses.Mode,
      courses: rawCourses.Courses,
    };
  },
};

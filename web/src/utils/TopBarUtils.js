module.exports = {
  // TODO: Create helper methods for type conversion ets
  convertRawRole: function(rawRole) {
    return {
      mode: rawRole.Mode,
      courses: rawRole.Courses,
    };
  },
};

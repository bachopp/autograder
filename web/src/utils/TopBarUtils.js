module.exports = {
  // TODO: Create helper methods for type conversion ets
  convertRawRole: function(rawRole) {
    return {
      mode: rawMessage.Mode,
      courses: rawMessage.Courses,
    };
  },
};

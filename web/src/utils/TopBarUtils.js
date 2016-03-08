module.exports = {
  // TODO: These are used in stores to convert received data from API to whatever we need
  convertRawRole: function(rawRole) {
    return {
      mode: rawRole.Mode,
      courses: rawRole.Courses,
    };
  },
};

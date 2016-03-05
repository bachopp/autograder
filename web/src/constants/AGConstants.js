var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    // TODO give some constatns to be used by Action creators and Stores
    RECEIVE_RAW_COURSES: null,
    RECEIVE_RAW_ROLES: null,
  })
};

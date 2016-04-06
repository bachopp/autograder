var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    // TODO give some constatns to be used by Action creators and Stores

    // GroupSelector Actions
    ADD_TO_GROUP: null,
    TOGGLE_GROUP: null,
    RECEIVE_RAW_GROUPS: null,
    ADD_NEW_GROUP: null,
    REMOVE_GROUP: null,
    REMOVE_STUDENT_FROM_GROUP: null,

    RECEIVE_RAW_COURSES: null,
    RECEIVE_RAW_ROLES: null,

    RECEIVE_RAW_STUDENTS: null,
    RECEIVE_RAW_GROUPS: null,

    QUERY_FOR_STUDENT: null,

    // TopBar Actions:
    RECEIVE_USER_MODE_COURSES: null,
    SWITCH_MODE: null,

    // CourseNav
    RECEIVE_COURSES_FOR_MODE: null,

    // SideNav
    SWITCH_SIDE_NAV: null,

  })
};

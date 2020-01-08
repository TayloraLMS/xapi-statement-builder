const verbs = require('./verbs');

module.exports = {

    cmi5: {
        registered: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
            },
            verb: verbs.registered
        },
        completed: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
            },
            verb: verbs.completed
        },
    },
    link: {
        registered: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/link'
            },
            verb: verbs.registered,
        },
    },
};
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
        initialized: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
            },
            verb: verbs.initialized
        },
        answered: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
            },
            verb: verbs.answered
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

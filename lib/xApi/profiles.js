const verbs = require('./verbs');

module.exports = {

    cmi5: {
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
        failed: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
            },
            verb: verbs.failed
        },
        initialized: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
            },
            verb: verbs.initialized
        },
        registered: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
            },
            verb: verbs.registered
        },
        terminated: {
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
            },
            verb: verbs.terminated
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

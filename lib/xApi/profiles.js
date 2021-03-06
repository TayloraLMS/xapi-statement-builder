const verbs = require('./verbs');

module.exports = {

    cmi5: {
        answered: {
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: verbs.answered
        },
        completed: {
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: verbs.completed
        },
        failed: {
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: verbs.failed
        },
        initialized: {
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: verbs.initialized
        },
        passed: {
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: verbs.passed
        },
        registered: {
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: verbs.registered
        },
        terminated: {
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: verbs.terminated
        },
    },
    link: {
        registered: {
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/link'
		}
            },
            verb: verbs.registered,
        },
    },
};

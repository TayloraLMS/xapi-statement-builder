const registeredBuilder = require('./registered');

describe('registered verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const registerd = registeredBuilder();

        expect(registerd.getStatement()).toEqual({
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            },
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/registered",
                "display": {
                    "en-US": "registered"
                }
            }
        })
    });

    describe('activty details', () => {
        it('should allow to specify an activity Id', () => {
            const registered = registeredBuilder();
            registered
                .activityId('http://wwww.example.com/foo-activity-id');

            expect(registered.getStatement()).toEqual({
                object: {
                    objectType: 'Activity',
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                    id: 'http://wwww.example.com/foo-activity-id'
                },
                verb: {
                    "id": "http://adlnet.gov/expapi/verbs/registered",
                    "display": {
                        "en-US": "registered"
                    }
                }
            })
        });
        it('should allow to specify an activity Name, with default locale en-US', () => {
            const registered = registeredBuilder();
            registered
                .activityName({value: 'My activity name'});

            expect(registered.getStatement()).toEqual({
                object: {
                    objectType: 'Activity',
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                    definition: {
                        name: {
                            'en-US': 'My activity name'
                        }
                    }
                },
                verb: {
                    "id": "http://adlnet.gov/expapi/verbs/registered",
                    "display": {
                        "en-US": "registered"
                    }
                }
            })
        });
        it('should allow to specify an activity Description, with default locale en-US', () => {
            const registered = registeredBuilder();
            registered
                .activityDescription({value: 'My activity desc'});

            expect(registered.getStatement()).toEqual({
                object: {
                    objectType: 'Activity',
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                    definition: {
                        description: {
                            'en-US': 'My activity desc'
                        }
                    }
                },
                verb: {
                    "id": "http://adlnet.gov/expapi/verbs/registered",
                    "display": {
                        "en-US": "registered"
                    }
                }
            })
        });
    });
});
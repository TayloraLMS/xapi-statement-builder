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
});
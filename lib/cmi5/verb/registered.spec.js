const registeredBuilder = require('./registered');

describe('registered verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const registered = registeredBuilder();

	// console.log(JSON.stringify(registered.getStatement()));

        expect(registered.getStatement()).toEqual({
            version: "1.0.3",
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

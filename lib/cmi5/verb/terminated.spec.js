const terminatedBuilder = require('./terminated');

describe('terminated verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const terminated = terminatedBuilder();

        expect(terminated.getStatement()).toEqual({
            version: "1.0.3",
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/terminated",
                "display": {
                    "en-US": "terminated"
                }
            }
        })
    });
});

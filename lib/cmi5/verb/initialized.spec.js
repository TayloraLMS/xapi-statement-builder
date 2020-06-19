const initializedBuilder = require('./initialized');

describe('initialized verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const initialized = initializedBuilder();

        expect(initialized.getStatement()).toEqual({
            version: "1.0.3",
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            },
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/initialized",
                "display": {
                    "en-US": "initialized"
                }
            }
        })
    });
});

const registeredBuilder = require('./registered');

describe('registered verb statement builder', () => {
    it('it should have the right key', () => {
        const registered = registeredBuilder();
        expect(registered.key).toEqual('verb');
    });

    it('should generate the verb portion of the statement', () => {
        const registerd = registeredBuilder();

        expect({[registerd.key]: registerd.getStatement()}).toEqual({
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/registered",
                "display": {
                    "en-US": "registered"
                }
            }
        })
    });

    describe('activty details', () => {
        it('should allow to specify an activity Id', () => {});
        it('should allow to specify an activity Name', () => {});
    });
});
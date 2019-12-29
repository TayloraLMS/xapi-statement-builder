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
            }
        })
    });

    describe('display', () => {
        it('should default to en-US', () => {
            const registered = registeredBuilder()
                .display({value: 'User registered'});

            expect({[registered.key]: registered.getStatement()}).toEqual({
                verb: {
                    "id": "http://adlnet.gov/expapi/verbs/registered",
                    "display": {
                        'en-US': "User registered"
                    }
                }
            })
        });

        it('should allow any locale', () => {
            const registerd = registeredBuilder()
                .display({locale: 'it-IT', value: 'User registered'});

            expect({[registerd.key]: registerd.getStatement()}).toEqual({
                verb: {
                    "id": "http://adlnet.gov/expapi/verbs/registered",
                    "display": {
                        'it-IT': "User registered"
                    }
                }
            })
        });
    })
});
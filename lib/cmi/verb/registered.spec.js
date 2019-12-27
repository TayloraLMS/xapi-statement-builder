const Registered = require('./registered');

describe('registered verb statement builder', () => {
    it('it should have the right key', () => {
        const registered = Registered();
        expect(registered.key).toEqual('verb');
    });

    it('should generate the verb portion of the statement', () => {
        const registerd = Registered();

        expect({[registerd.key]: registerd.stmt()}).toEqual({
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/registered",
            }
        })
    });

    describe('display', () => {
        it('should default to en-US', () => {
            const registerd = Registered()
                .display({value: 'User registered'});

            expect({[registerd.key]: registerd.stmt()}).toEqual({
                verb: {
                    "id": "http://adlnet.gov/expapi/verbs/registered",
                    "display": {
                        'en-US': "User registered"
                    }
                }
            })
        });

        it('should allow any locale', () => {
            const registerd = Registered()
                .display({locale: 'it-IT', value: 'User registered'});

            expect({[registerd.key]: registerd.stmt()}).toEqual({
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
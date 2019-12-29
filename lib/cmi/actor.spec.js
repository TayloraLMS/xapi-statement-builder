const actor = require('./actor');

describe('actor statement builder', () => {

    const fixtures = {
        accountStmt: {
            "name": "ALICE001",
            "homePage": "https://www.example.com"
        }
    };

    const mockAccount = {
        getStatement: jest.fn(() => fixtures.accountStmt),
        key: 'account'
    };

    test('it should have the right key', () => {
        const alice = actor(mockAccount);

        expect(alice.key).toEqual('actor');
    });

    test('should generate the actor portion of the statement', () => {
        const alice = actor(mockAccount);

        expect(alice.getStatement()).toEqual({
            "objectType": "Agent",
            "account": {
                "name": "ALICE001",
                "homePage": "https://www.example.com"
            }
        });
    });

    test('it should reject generic IFI other than "account"', () => {

        const IFI = {
            key: 'ifi-name',
            getStatement: () => 'some-ifi-data'
        };

        expect(() => actor(IFI)).toThrow();
    });

    test('it should allow an optional name', () => {
       const alice = actor(mockAccount)
           .name('Alice Cooper');

        expect(alice.getStatement()).toEqual({
            "objectType": "Agent",
            "name": "Alice Cooper",
            "account": {
                "name": "ALICE001",
                "homePage": "https://www.example.com"
            }
        });
    })
});
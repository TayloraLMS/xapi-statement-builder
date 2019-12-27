const Actor = require('./actor');

describe('actor statement builder', () => {

    const fixtures = {
        accountStmt: {
            "name": "ALICE001",
            "homePage": "https://www.example.com"
        }
    };

    const mockAccount = {
        stmt: jest.fn(() => fixtures.accountStmt),
        key: 'account'
    };

    test('it should have the right key', () => {
        const alice = Actor(mockAccount);

        expect(alice.key).toEqual('actor');
    });

    test('should generate the actor portion of the statement', () => {
        const alice = Actor(mockAccount);

        expect(alice.stmt()).toEqual({
            "objectType": "Agent",
            "account": {
                "name": "ALICE001",
                "homePage": "https://www.example.com"
            }
        });
    });

    test('it should be identified by an Inverse Functional Identifier (IFI)', () => {

        const IFI = {
            key: 'ifi-name',
            stmt: () => 'some-ifi-data'
        };
        const alice = Actor(IFI);

        expect(alice.stmt()).toEqual({
            "objectType": "Agent",
            "ifi-name": 'some-ifi-data'
        });
    });

    test('it should allow an optional name', () => {
       const alice = Actor(mockAccount)
           .name('Alice Cooper');

        expect(alice.stmt()).toEqual({
            "objectType": "Agent",
            "name": "Alice Cooper",
            "account": {
                "name": "ALICE001",
                "homePage": "https://www.example.com"
            }
        });
    })
});
const Account = require('./account');

describe('IFI: Account', () => {
    test('it should have the right key', () => {
        const aliceId = Account({name: 'Alice', homePage: 'http://www.example.com'});

        expect(aliceId.key).toEqual('account');
    })

    test('it should generate the right statement snippet', () => {
        const aliceId = Account({name: 'Alice', homePage: 'http://www.example.com'});

        expect({[aliceId.key]: aliceId.getStatement()}).toEqual({
            account: {
                name: 'Alice',
                homePage: 'http://www.example.com'
            }
        })
    })
});
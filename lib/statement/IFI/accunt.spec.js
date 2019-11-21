const Account = require('./account');

describe('IFI: Account', () => {
    test('it should have the right name', () => {
        const aliceId = Account({name: 'Alice', homePage: 'http://www.example.com'});

        expect(aliceId.name).toEqual('account');
    })

    test('it should generate the right statement snippet', () => {
        const aliceId = Account({name: 'Alice', homePage: 'http://www.example.com'});

        expect({[aliceId.name]: aliceId.stmt()}).toEqual({
            account: {
                name: 'Alice',
                homePage: 'http://www.example.com'
            }
        })
    })
});
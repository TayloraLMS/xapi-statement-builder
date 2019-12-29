const openId = require('./openId');

describe('IFI: openid', () => {
    test('it should have the right key', () => {
        const aliceId = openId('fooOpenId');

        expect(aliceId.key).toEqual('openid');
    });

    test('it should generate the right statement snippet', () => {
        const aliceId = openId('fooOpenId');

        expect({[aliceId.key]: aliceId.getStatement()}).toEqual({
            openid: 'fooOpenId'
        })
    });
});
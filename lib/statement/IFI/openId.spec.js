const OpenId = require('./openId');

describe('IFI: openid', () => {
    test('it should have the right key', () => {
        const aliceId = OpenId('fooOpenId');

        expect(aliceId.key).toEqual('openid');
    });

    test('it should generate the right statement snippet', () => {
        const aliceId = OpenId('fooOpenId');

        expect({[aliceId.key]: aliceId.stmt()}).toEqual({
            openid: 'fooOpenId'
        })
    });
});
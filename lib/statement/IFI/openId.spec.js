const OpenId = require('./openId');

describe('IFI: openid', () => {
    test('it should have the right name', () => {
        const aliceId = OpenId('fooOpenId');

        expect(aliceId.name).toEqual('openid');
    });

    test('it should generate the right statement snippet', () => {
        const aliceId = OpenId('fooOpenId');

        expect({[aliceId.name]: aliceId.stmt()}).toEqual({
            openid: 'fooOpenId'
        })
    });
});
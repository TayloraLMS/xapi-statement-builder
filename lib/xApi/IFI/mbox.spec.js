const mbox = require('./mbox');

describe('IFI: mbox', () => {

    test('it should have the right key', () => {
        const aliceId = mbox('fooMbox');

        expect(aliceId.key).toEqual('mbox');
    });

    test('it should generate the right statement snippet', () => {
        const aliceId = mbox('fooMbox');

        expect({[aliceId.key]: aliceId.getStatement()}).toEqual({
            mbox: 'fooMbox'
        })
    });

    describe('Hex Encoded sha1 mbox identifier', () => {
        test('it should have the right key', () => {
            const aliceId = mbox('fooMbox', true);

            expect(aliceId.key).toEqual('mbox_sha1sum');
        });

        test('it should generate the right statement snippet', () => {
            const aliceId = mbox('fooHashedMbox', true);

            expect({[aliceId.key]: aliceId.getStatement()}).toEqual({
                mbox_sha1sum: 'fooHashedMbox'
            })
        });
    })
});
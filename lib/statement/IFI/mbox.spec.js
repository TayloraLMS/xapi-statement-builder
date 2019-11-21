const Mbox = require('./mbox');

describe('IFI: mbox', () => {

    test('it should have the right name', () => {
        const aliceId = Mbox('fooMbox');

        expect(aliceId.name).toEqual('mbox');
    });

    test('it should generate the right statement snippet', () => {
        const aliceId = Mbox('fooMbox');

        expect({[aliceId.name]: aliceId.stmt()}).toEqual({
            mbox: 'fooMbox'
        })
    });

    describe('Hex Encoded sha1 mbox identifier', () => {
        test('it should have the right name', () => {
            const aliceId = Mbox('fooMbox', true);

            expect(aliceId.name).toEqual('mbox_sha1sum');
        });

        test('it should generate the right statement snippet', () => {
            const aliceId = Mbox('fooHashedMbox', true);

            expect({[aliceId.name]: aliceId.stmt()}).toEqual({
                mbox_sha1sum: 'fooHashedMbox'
            })
        });
    })
});
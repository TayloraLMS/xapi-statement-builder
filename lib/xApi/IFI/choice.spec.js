const choice = require('./choice');

describe('IFI: Choice', () => {
    test('it should have the right id', () => {
        const firstChoice = choice(1, "First choice");

        expect(firstChoice.id).toEqual('1');
    })

    test('it should generate the right description', () => {
        const firstChoice = choice(1, "First choice");

        expect(firstChoice.description['en-US']).toEqual('First choice');
    })
});

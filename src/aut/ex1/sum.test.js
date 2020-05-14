const sum = require('./sum');

describe('Sum', () => {
    beforeEach(() => {
        reporter
            .severity('Minor') // suggestion: [Critical, Major, Minor, Trivial]
            .epic('Calculator')
            .feature('Arithmetic')
            .story('Sum');
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 1 + 1 to equal 2', () => {
        expect(sum(1, 1)).toBe(2);
    });

    test('adds 1 + 3 to equal 4', () => {
        expect(sum(1, 3)).toBe(4);
    });

    test('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    test('adds 10 + 2 to equal 12', () => {
        expect(sum(10, 2)).toBe(12);
    });
});
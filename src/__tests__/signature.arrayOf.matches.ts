import { define, a, an } from '../';

describe('arrayOf', () => {
    it('should check against an array', () => {
        const signature = define(an.arrayOf(
            a.string.thatMatches(v => v.length > 3),
        ));

        expect(signature.matches(['foobar'])).toBe(true);
        expect(signature.matches(['foo'])).toBe(false);
        expect(signature.matches(['foo', 'bar', 'foobar'])).toBe(false);
    });
});

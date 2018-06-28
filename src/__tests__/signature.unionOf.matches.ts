import { a, define } from '../';

describe('unionOf.matches', () => {
    it('should check against a union', () => {
        const signature = define(a.unionOf(
            a.string.thatMatches(v => v === 'yes' || v === 'no'),
            a.boolean,
        ));

        expect(signature.matches(true)).toBe(true);
        expect(signature.matches(false)).toBe(true);
        expect(signature.matches('yes')).toBe(true);
        expect(signature.matches('no')).toBe(true);
        expect(signature.matches('foo')).toBe(false);
        expect(signature.matches(99 as any)).toBe(false);
    });
});

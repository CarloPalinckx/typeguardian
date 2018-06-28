import { a, define } from '../';

describe('string.matches', () => {
    it('should check against a required loose string', () => {
        const signature = define(a.string);

        expect(signature.matches('foo')).toBe(true);
        expect(signature.matches(99 as any)).toBe(false);
    });

    it('should check against a required strict string', () => {
        const signature = define(a.string.thatMatches(v => v === 'bar'));

        expect(signature.matches('bar')).toBe(true);
        expect(signature.matches('foo')).toBe(false);
        expect(signature.matches(99 as any)).toBe(false);
    });

    it('should check against an optional string', () => {
        const signature = define(a.string
            .thatMatches(v => v === 'bar')
            .withDefault('foobar'));

        expect(signature.matches('bar')).toBe(true);
        expect(signature.matches('foobar')).toBe(true);
        expect(signature.matches('foo')).toBe(false);
        expect(signature.matches(99 as any)).toBe(false);
    });
});

import createSignature from '../signature';

describe('matches', () => {
    it('should check against a required loose string', () => {
        const signature = createSignature(({ string }) => string);

        expect(signature.matches('foo')).toBe(true);
        expect(signature.matches(99 as any)).toBe(false);
    });

    it('should check against a required strict string', () => {
        const signature = createSignature(({ string }) =>
            string.thatMatches(v => v === 'bar'),
        );

        expect(signature.matches('bar')).toBe(true);
        expect(signature.matches('foo')).toBe(false);
        expect(signature.matches(99 as any)).toBe(false);
    });
});

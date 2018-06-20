import createSignature from '../signature';

describe('createWith', () => {
    it('should no-op when the value passes', () => {
        const signature = createSignature(({ string }) => string);

        expect(signature.createWith('foo'));
    });

    it("should use the default when a value doesn't pass", () => {
        const signature = createSignature(({ string }) =>
            string.thatMatches(v => v === 'foo').withDefault('bar'),
        );

        expect(signature.createWith('foo')).toBe('foo');
        expect(signature.createWith('foobar')).toBe('bar');
    });

    it("should throw an error when the value doesn't pass and no default is provided", () => {
        const signature = createSignature(({ string }) =>
            string.thatMatches(v => v === 'foo'),
        );

        expect(signature.createWith('foo')).toBe('foo');
        expect(() => signature.createWith(1)).toThrow();
    });
});

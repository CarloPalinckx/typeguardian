import { define, a } from '../';

describe('signature.createWith', () => {
    it('should no-op when the value passes', () => {
        const signature = define(a.string);

        expect(signature.createWith('foo')).toBe('foo');
    });

    it("should use the default when a value doesn't pass", () => {
        const signature = define(a.string
            .thatMatches(v => v === 'foo')
            .withDefault('bar'));

        expect(signature.createWith('foo')).toBe('foo');
        expect(signature.createWith('foobar')).toBe('bar');
    });

    it("should throw an error when the value doesn't pass and no default is provided", () => {
        const signature = define(a.string.thatMatches(v => v === 'foo'));

        expect(signature.createWith('foo')).toBe('foo');
        expect(() => signature.createWith(1 as any)).toThrow();
    });
});

import { define, a, an } from '../';

describe('objectOf.matches', () => {
    it('should check against an object', () => {
        const signature = define(an.objectOf({
            name: a.string.thatMatches(v => v.length > 0),
            age: a.number.withDefault(1),
        }));

        expect(signature.matches({ name: 'foo', age: 99 })).toBe(true);
        expect(signature.matches({ name: 'bar' })).toBe(true);
        expect(signature.matches({ name: '', age: 1 })).toBe(false);
    });
});

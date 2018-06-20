import { Configuration } from '../configuration';

type Predicate<V> = (value: V) => boolean;
type Matcher<T> = (value: T) => boolean;

const createMatcher = <T, D>({
    predicates,
    defaultValue,
}: Configuration<T>): Matcher<T> => {
    const matches = <T>(value): boolean =>
        predicates.reduce((matching, predicate): boolean => {
            return predicate(value) ? matching : false;
        }, true);

    return matches;
};

export default createMatcher;
export { Matcher, Predicate };

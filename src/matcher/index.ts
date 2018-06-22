import { Matcher, Configuration } from '../types';

const createMatcher = <T, D>({
    predicates,
    defaultValue,
}: Configuration<T>): Matcher<T> => {
    const matches = <T>(value): boolean =>
        predicates.reduce((matching, predicate): boolean => {
            return predicate(value) ? matching : false;
        }, true) || value === defaultValue;

    return matches;
};

export default createMatcher;

import { Signature } from '../types';
import createFactory from '../factory';
import createMatcher from '../matcher';
import MatcherConfiguration from '../configuration';
import stringMatcher from '../matcher/types/string';
import booleanMatcher from '../matcher/types/boolean';

const define = <T>(matcher: MatcherConfiguration<T>): Signature<T> => {
    const { __configuration } = matcher;

    return {
        matches: createMatcher(__configuration),
        createWith: createFactory(__configuration),
    };
};

const t = {
    string: stringMatcher,
    boolean: booleanMatcher,
};

export default t;
export { define };

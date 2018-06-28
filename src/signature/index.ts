import { Signature } from '../types';
import createFactory from '../factory';
import createMatcher from '../matcher';
import MatcherConfiguration from '../configuration';
import stringMatcherConfiguration from '../matcher/types/string';
import booleanMatcherConfiguration from '../matcher/types/boolean';
import createUnionConfiguration from '../matcher/types/unionOf';
import createArrayConfiguration from '../matcher/types/arrayOf';
import numberConfiguration from '../matcher/types/number';
import createObjectConfiguration from '../matcher/types/objectOf';

const define = <T>(matcher: MatcherConfiguration<T>): Signature<T> => {
    const { __configuration } = matcher;

    return {
        matches: createMatcher(__configuration),
        createWith: createFactory(__configuration),
    };
};

const a = {
    string: stringMatcherConfiguration,
    boolean: booleanMatcherConfiguration,
    number: numberConfiguration,
    objectOf: createObjectConfiguration,
    unionOf: createUnionConfiguration,
    arrayOf: createArrayConfiguration,
};

export { define, a };

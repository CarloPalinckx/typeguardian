import MatcherConfiguration from '../configuration';
import createFactory from '../factory';
import createMatcher from '../matcher';

type Creator<T> = (matchers: Matchers) => MatcherConfiguration<T>;

type Matchers = {
    string: MatcherConfiguration<string>;
};

type Singature<T> = {
    matches(value: T): boolean;
    createWith(value: T): T;
};

const createSignature = <T>(creator: Creator<T>): Singature<T> => {
    const configuration = creator({
        string: MatcherConfiguration.string,
    }).__configuration;

    return {
        matches: createMatcher(configuration),
        createWith: createFactory(configuration),
    };
};

export default createSignature;

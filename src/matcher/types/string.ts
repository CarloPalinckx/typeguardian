import MatcherConfiguration from '../../configuration';

const stringMatcher = new MatcherConfiguration({
    predicates: [v => typeof v === 'string'],
});

export default stringMatcher;

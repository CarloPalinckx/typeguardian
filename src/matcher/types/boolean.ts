import MatcherConfiguration from '../../configuration';

const booleanMatcher = new MatcherConfiguration({
    predicates: [v => typeof v === 'boolean'],
});

export default booleanMatcher;

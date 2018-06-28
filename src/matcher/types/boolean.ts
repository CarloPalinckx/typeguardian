import MatcherConfiguration from '../../configuration';

const booleanMatcherConfiguration = new MatcherConfiguration({
    predicates: [value => typeof value === 'boolean'],
});

export default booleanMatcherConfiguration;

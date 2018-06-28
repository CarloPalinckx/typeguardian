import MatcherConfiguration from '../../configuration';

const booleanMatcherConfiguration = new MatcherConfiguration<boolean>({
    predicates: [value => typeof value === 'boolean'],
});

export default booleanMatcherConfiguration;

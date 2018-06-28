import MatcherConfiguration from '../../configuration';

const booleanMatcherConfiguration = new MatcherConfiguration<boolean>({
    predicates: [v => typeof v === 'boolean'],
});

export default booleanMatcherConfiguration;

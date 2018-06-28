import MatcherConfiguration from '../../configuration';

const stringMatcherConfiguration = new MatcherConfiguration<string>({
    predicates: [value => typeof value === 'string'],
});

export default stringMatcherConfiguration;

import MatcherConfiguration from '../../configuration';

const stringMatcherConfiguration = new MatcherConfiguration({
    predicates: [value => typeof value === 'string'],
});

export default stringMatcherConfiguration;

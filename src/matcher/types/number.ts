import MatcherConfiguration from '../../configuration';

const numberConfiguration = new MatcherConfiguration<number>({
    predicates: [v => typeof v === 'number'],
});

export default numberConfiguration;

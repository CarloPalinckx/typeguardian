import MatcherConfiguration from '../../configuration';

const createArrayConfiguration = arg => {
    const combinedPredicate = value =>
        arg.__configuration.predicates.reduce(
            (matching, predicate): boolean => {
                return predicate(value) ? matching : false;
            },
            true,
        );

    return new MatcherConfiguration<Array<any>>({
        predicates: [
            value =>
                value.reduce(
                    (matching, item) =>
                        combinedPredicate(item) ? matching : false,
                    true,
                ),
        ],
    });
};

export default createArrayConfiguration;

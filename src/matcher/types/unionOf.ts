import MatcherConfiguration from '../../configuration';

const createUnionConfiguration = <T>(
    ...args: Array<MatcherConfiguration<T>>
) => {
    const combinedPredicate = value =>
        args
            .map(arg => (value): boolean =>
                arg.__configuration.predicates.reduce(
                    (matches, predicate) =>
                        predicate(value) ? matches : false,
                    true,
                ),
            )
            .reduce(
                (matches, predicate) => (predicate(value) ? true : matches),
                false,
            );

    return new MatcherConfiguration({
        predicates: [combinedPredicate],
    });
};

export default createUnionConfiguration;

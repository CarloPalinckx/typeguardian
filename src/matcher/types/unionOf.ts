import MatcherConfiguration from '../../configuration';

const createUnionConfiguration = <T>(
    ...args: Array<MatcherConfiguration<any>>
) => {
    return new MatcherConfiguration<T>({
        predicates: [
            value =>
                args
                    .map(arg => (value): boolean =>
                        arg.__configuration.predicates.reduce(
                            (matches, predicate) =>
                                predicate(value) ? matches : false,
                            true,
                        ),
                    )
                    .reduce(
                        (matches, predicate) =>
                            predicate(value) ? true : matches,
                        false,
                    ),
        ],
    });
};

export default createUnionConfiguration;

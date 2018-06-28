import MatcherConfiguration from '../../configuration';
import combinePredicates from '../../lib/combinePredicates';

const createArrayConfiguration = arg => {
    const combinedPredicate = combinePredicates(arg.__configuration);

    return new MatcherConfiguration<Array<any>>({
        predicates: [
            value => Array.isArray(value),
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

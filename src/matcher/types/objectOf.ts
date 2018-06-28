import MatcherConfiguration from '../../configuration';
import combinePredicates from '../../lib/combinePredicates';

const createObjectConfiguration = (arg: {
    [key: string]: MatcherConfiguration<any>;
}) => {
    const keyPredicates = {};

    for (const key in arg) {
        keyPredicates[key] = combinePredicates(arg[key].__configuration);
    }

    return new MatcherConfiguration({
        predicates: [
            value => {
                return Object.keys(value).reduce(
                    (matching, key) =>
                        keyPredicates[key](value[key]) ? matching : false,
                    true,
                );
            },
        ],
    });
};

export default createObjectConfiguration;

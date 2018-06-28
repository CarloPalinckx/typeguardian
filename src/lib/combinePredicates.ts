const combinePredicates = configuration => {
    return value =>
        configuration.predicates.reduce((matching, predicate): boolean => {
            return predicate(value) ? matching : false;
        }, true);
};

export default combinePredicates;

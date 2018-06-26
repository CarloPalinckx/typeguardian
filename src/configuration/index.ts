import { Predicate, Configuration, DefaultValue } from '../types';

class MatcherConfiguration<T> {
    public __configuration: Configuration<T> = {
        defaultValue: undefined,
        predicates: [],
    };

    public constructor(base: Configuration<T>) {
        if (base !== undefined) {
            this.__configuration = base;
        }
    }

    public withDefault(defaultValue: DefaultValue<T>): MatcherConfiguration<T> {
        if (defaultValue === undefined) {
            throw Error(
                'Default value cannot be undefined, You should provide a default value.',
            );
        }

        if (this.__configuration.defaultValue !== undefined) {
            throw Error(
                "Default value is already set. You can't set two default values.",
            );
        }

        return new MatcherConfiguration<T>({
            ...this.__configuration,
            defaultValue,
        });
    }

    public thatMatches(predicate: Predicate<T>): MatcherConfiguration<T> {
        return new MatcherConfiguration<T>({
            ...this.__configuration,
            predicates: [...this.__configuration.predicates, predicate],
        });
    }
}

export default MatcherConfiguration;

import { Predicate } from '../matcher';
import stringConfiguration from '../matcher/types/string';

type DefaultValue<T> = T | null;

type Configuration<T> = {
    defaultValue?: DefaultValue<T>;
    predicates: Array<Predicate<T>>;
};

class MatcherConfiguration<T> {
    public static string: MatcherConfiguration<
        string
    > = new MatcherConfiguration<string>(stringConfiguration);

    public __configuration: Configuration<T> = {
        defaultValue: undefined,
        predicates: [],
    };

    private constructor(base: Configuration<T>) {
        if (base !== undefined) {
            this.__configuration = base;
        }
    }

    public withDefault(defaultValue: DefaultValue<T>): MatcherConfiguration<T> {
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
export { Configuration };

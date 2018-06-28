import MatcherConfiguration from './configuration';

export type Predicate<V> = (value: V) => boolean;
export type Matcher<T> = (value: T) => boolean;

export type DefaultValue<T> = T | null;

export type Configuration<T> = {
    defaultValue?: DefaultValue<T>;
    predicates: Array<Predicate<T>>;
};

export type Signature<T> = {
    matches(value: T): boolean;
    createWith(value: T): T;
};

export type Define<T> = (matcher: MatcherConfiguration<T>) => Signature<T>;

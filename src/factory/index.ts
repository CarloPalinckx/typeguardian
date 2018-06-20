import { Configuration } from '../configuration';
import createMatcher from '../matcher';

type Factory = <T>(value: T) => T;

const createFactory = <T>(configuration: Configuration<T>) => (value: T): T => {
    const matcher = createMatcher(configuration);

    if (matcher(value)) {
        return value;
    }

    if (!matcher(value) && configuration.defaultValue !== undefined) {
        return configuration.defaultValue;
    }

    throw new Error(
        "createWith failed because there was an attempt to create a value, but it didn't pass evaluation and there was no default value provided",
    );
};

export default createFactory;

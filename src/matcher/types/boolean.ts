import { Configuration } from '../../types';

const booleanConfiguration: Configuration<boolean> = {
    predicates: [v => typeof v === 'boolean'],
};

export default booleanConfiguration;

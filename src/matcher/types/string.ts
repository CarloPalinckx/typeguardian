import { Configuration } from '../../configuration';

const stringConfiguration: Configuration<string> = {
    predicates: [v => typeof v === 'string'],
};

export default stringConfiguration;

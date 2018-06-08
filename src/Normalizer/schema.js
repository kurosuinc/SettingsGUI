// @flow
import type { scheme } from '../types/scheme';

export default (schema: Array<scheme>): Array<Object> => (
    schema.map(item => ({
        field: {
            key: item.key,
            label: item.label,
            placeholder: item.placeholder,
            description: item.description,
            required: item.required,
        },
        rules: {
            type: item.type,
            regexps: item.rules,
        },
    }))
);

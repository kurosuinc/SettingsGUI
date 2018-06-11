// @flow
import type { scheme } from '../types/scheme';

export default (schema: Array<Object>): Array<Object> => (
    schema.map(item => ({
        field: {
            key: item.key,
            label: item.label,
            placeholder: item.placeholder,
            description: item.description,
            required: item.required,
        },
        rules: item.rules.map(rule => ({
            required: item.required,
            type: item.type,
            regex: rule.regex,
            errMessage: rule.error,
        }))
    }))
);

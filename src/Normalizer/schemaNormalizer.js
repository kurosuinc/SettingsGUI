// @flow
import { field } from "../types/field";
import { rule } from '../types/rule';

export default (schema: Array<Object>): Array<Object> => (
    schema.map((item: Object): field => ({
        field: {
            key: item.key,
            label: item.label,
            placeholder: item.placeholder,
            description: item.description,
            required: item.required,
        },
        rules: item.rules.map((rule: Object): rule => ({
            required: item.required,
            type: item.type,
            regex: rule.regex,
            errMessage: rule.error,
        }))
    }))
);

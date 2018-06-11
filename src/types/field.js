// @flow

export type fieldDefinition = {
    key: string,
    label: string,
    placeholder: string,
    description: string,
    required: boolean,
};

export type field = {
    text: string,
    error: ?string,
};

export type spreadField = {
    ...fieldDefinition,
    ...field,
};

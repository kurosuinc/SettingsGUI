// @flow
import { createSelector } from 'reselect';
import type { field } from "../../types/field";

const fieldState = (state: Object): Array<field> => state.Field;
const schemaState = (state: Object): Array<Object> => state.Schema;

export const fields = createSelector(
    [fieldState, schemaState],
    (_field: Array<field>, _schema: Array<Object>) =>
        _field.map((item, index) => ({...item, ..._schema[index].field})
    )
);

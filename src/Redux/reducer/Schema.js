// @flow
import { handleActions } from 'redux-actions';
import * as types from '../constant';

const initState = [];

const reducer = handleActions({
    [types.APP.SCHEMA_LOADED]: (state: Array<Object>, action: Object) => (
        action.payload.schema
    )
}, initState);

export default reducer;

// @flow
import { handleActions } from 'redux-actions';
import * as types from '../constant';
import type { field } from '../../types/field';

export type State = Array<field>;

const initState: State = [];

const reducer = handleActions({
    [types.RULE_CHECK.UPDATE_FORM_TEXT]: (state: State, action: Object) => (
        state.map((item, index) => (index === action.payload.index) ? {text: action.payload.target, error: null} : item)
    ),
    [types.RULE_CHECK.RULE_CHECK_SUCCEEDED]: (state: State, action: Object) => (
        state // TODO
    ),
    [types.RULE_CHECK.RULE_CHECK_FAILED]: (state: State, action: Object) => (
        state // TODO
    ),
    [types.APP.FIELD_CREATED]: (state: State, action: Object) => (
        action.payload.fields
    )
}, initState);

export default reducer;

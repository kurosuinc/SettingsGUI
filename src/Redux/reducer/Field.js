// @flow
import { handleActions } from 'redux-actions';
import * as types from '../constant';
import type { field } from '../../types/field';

export type State = Array<field>;

const reducer = handleActions({}, initState);

export default reducer;
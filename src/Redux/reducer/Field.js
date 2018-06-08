// @flow
import { handleActions } from 'redux-actions';
import * as types from '../constant';

const initState = {};

const reducer = handleActions({}, initState);

export default reducer;
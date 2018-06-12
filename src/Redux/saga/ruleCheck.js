// @flow
import { put, call, select } from 'redux-saga/effects';
import * as types from '../constant';

export default function*(action: Object): any {
    try{
        yield put({
            type: types.RULE_CHECK.UPDATE_FORM_TEXT,
            payload: action.payload
        });
    }catch(e){
        console.log(e);
    }
};

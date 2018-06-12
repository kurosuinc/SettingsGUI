// @flow
import { put, call, select } from 'redux-saga/effects';
import * as types from '../constant';
import rulechecker from '../api/ruleChecker';

export default function*(action: Object): any {
    try{
        const {target, index} = action.payload;
        yield put({
            type: types.RULE_CHECK.UPDATE_FORM_TEXT,
            payload: action.payload
        });

        const rules = yield select((state: Object) => state.Schema[index].rules);
        const result = rulechecker(rules, target);
        if(result){
            yield put({
                type: types.RULE_CHECK.RULE_CHECK_SUCCEEDED,
                payload: {
                    index
                }
            });
        }else{ //
            yield put({
                type: types.RULE_CHECK.RULE_CHECK_FAILED,
                payload: {
                    index,
                    error: result,
                }
            });
        }
    }catch(e){
        throw e;
    }
};

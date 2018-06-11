// @flow
import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../constant';

import loadSchemaFile from './loadSchemaFile';
import exportConfigFile from './exportConfigFile';
import ruleCheck from './ruleCheck';

function* rootSaga(): any {
    yield takeEvery(types.RULE_CHECK.REQUEST_RULE_CHECK, ruleCheck);
    yield takeLatest(types.APP.REQUEST_APP_INITIALIZE, loadSchemaFile);
    yield takeLatest(types.FILE.REQUEST_EXPORT_FILE, exportConfigFile);
}

export default rootSaga;

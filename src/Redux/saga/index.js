// @flow
import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../constant';

import loadSchemaFile from './loadSchemaFile';
import exportConfigFile from './exportConfigFile';
import ruleCheck from './ruleCheck';

function* rootSaga(): any {
    takeEvery(types.RULE_CHECK.REQUEST_RULE_CHECK, ruleCheck);
    takeLatest(types.APP.REQUEST_LOAD_SCHEMA_FILE, loadSchemaFile);
    takeLatest(types.FILE.REQUEST_EXPORT_FILE, exportConfigFile)
};

export default rootSaga;

// @flow
import { put } from 'redux-saga/effects';
import * as types from '../constant';
import schemaNormalizer from '../../Normalizer/schemaNormalizer'
import testdata from '../../testdata/schemaSample';
import type {field} from "../../types/field";

export default function* (action) {
    try {
        const appData = testdata.config;
        const schema = schemaNormalizer(testdata.schema); // とりあえずtestdataを読ませています

        yield put({
            type: types.APP.APPLICATION_INITIALIZE_SUCCEEDED,
            payload: { appData },
        });
        yield put({
            type: types.APP.SCHEMA_LOADED,
            payload: { schema },
        });

        const fields = schema.map((): field => ({
            text: '', // TODO: initialize default parameter
            error: null,
        }));
        yield put({
            type: types.APP.FIELD_CREATED,
            payload: { fields }
        });
    } catch(e) {
        yield put({ type: types.APP.APPLICATION_INITIALIZE_FAILED, error: e });
    }
};

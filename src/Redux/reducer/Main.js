// @flow
import { handleActions } from 'redux-actions';
import * as types from '../constant';

const initState = {
    name: 'AppConfig',
//    schemaPath: './config.json',
    filePath: '', // load and export config file location
    defaultFilePath: '',
};

const reducer = handleActions({

}, initState);

export default reducer;

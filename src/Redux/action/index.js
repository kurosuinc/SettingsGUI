// @flow
import { createActions } from 'redux-actions';
import * as types from '../constant';

export const appActions = createActions(
	types.APP.REQUEST_LOAD_SCHEMA_FILE,
	types.FILE.REQUEST_EXPORT_FILE,
);

export const fieldActions = createActions(
	types.RULE_CHECK.REQUEST_RULE_CHECK,
);

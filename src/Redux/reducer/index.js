// @flow
import {combineReducers} from 'redux';

import Main from './Main';
import Schema from './Schema';
import Field from './Field';
import Notification from './Notification';

export default combineReducers({
    Main,
    Schema,
	Field,
	Notification,
});

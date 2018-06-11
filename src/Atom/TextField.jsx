// @flow
import React from 'react';
import {onlyUpdateForKeys} from 'recompose';
import _TextField from '@material-ui/core/TextField'
import type { fieldDefinition } from '../types/field';

type Props = {
	fieldData: fieldDefinition,
	content: string | number,
	error: ?string;
};

const onChangeEvent = () => (e: Event) => {
	console.log(e.target.value);
};

const TextField = (props: Props) => (
	<_TextField
		required={props.fieldData.required}
		error={!!props.error}
		id={props.fieldData.key}
		label={props.fieldData.label}
		placeholder={props.fieldData.placeholder}
		helperText={props.fieldData.description}
		value={props.content}
		onChange={onChangeEvent()}/>
);

export default onlyUpdateForKeys(['content', 'error'])(TextField);

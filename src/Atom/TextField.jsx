// @flow
import React from 'react';
import {onlyUpdateForKeys} from 'recompose';
import _TextField from '@material-ui/core/TextField'
import type {scheme} from '../types/scheme';
import type {rule} from '../types/rule';

type Props = {
	fieldData: {
		key: string,
		label: string,
		placeholder: string,
		description: string,
		required: boolean,
	},
	content: string | number,
	error: ?string;
};

const onChangeEvent = () => (e: Event) => {
	console.log(e.target.value);
};

const TextField = (props: Props) => (
	<React.Fragment>

		<_TextField
			required={props.fieldData.required}
			error={!!props.error}
			id={props.fieldData.key}
			label={props.fieldData.label}
			placeholder={props.fieldData.placeholder}
			helperText={props.fieldData.description}
			value={props.content}
			onChange={onChangeEvent()}/>
		</React.Fragment>
);

export default onlyUpdateForKeys(['content'])(TextField);
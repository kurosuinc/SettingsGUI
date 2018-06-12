// @flow
import React from 'react';
import {onlyUpdateForKeys} from 'recompose';
import _TextField from '@material-ui/core/TextField'
import type { spreadField } from '../../types/field';

type Props = {
    ...spreadField
};

const onChangeEvent = () => (e: Event) => {
	console.log(e.target.value);
};

const TextField = (props: Props) => (
	<_TextField
        fullWidth
		required={props.required}
		error={!!props.error}
		id={props.key}
		label={props.label}
		placeholder={props.placeholder}
		helperText={props.description}
		value={props.text}
		onChange={onChangeEvent()}/>
);

export default onlyUpdateForKeys(['text', 'error'])(TextField);

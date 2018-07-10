// @flow
import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import _TextField from '@material-ui/core/TextField'
import type { spreadField } from '../../../types/field';

type Props = {
    field: spreadField,
    index: number,
    checkText: Function,
};

const onChangeEvent = (props: Props) => (e: Object) => {
	props.checkText({
        index: props.index,
        target: e.target.value,
	});
};

const TextField = (props: Props) => (
	<_TextField
        fullWidth
		required={props.field.required}
		error={!!props.field.error}
		id={props.field.key}
		label={props.field.label}
		placeholder={props.field.placeholder}
		helperText={props.field.description}
		value={props.field.text}
		onChange={onChangeEvent(props)}/>
);

export default onlyUpdateForKeys(['field'])(TextField);

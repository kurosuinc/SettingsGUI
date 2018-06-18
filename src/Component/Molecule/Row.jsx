import React from 'react';
import { pure } from 'recompose';
import ListItem from '@material-ui/core/ListItem';
import TextField from '../Atom/TextField';
import type { spreadField } from "../../types/field";

type Props = {
    field: spreadField,
    index: number,
    checkText: Function,
}

const Row = (props: Props) => (
    <ListItem>
        <TextField field={props.field} index={props.index} checkText={props.checkText}/>
    </ListItem>
);

export default pure(Row);

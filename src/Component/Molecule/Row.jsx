import React from 'react';
import { pure } from 'recompose';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Label from '../Atom/Label';
import TextField from '../Atom/TextField';
import type { spreadField } from "../../types/field";

type Props = {
    field: spreadField
}

const Row = (props: Props) => (
    <TableRow>
        <TableCell>
            <Label label={props.field.label}/>
        </TableCell>
        <TableCell>
            <TextField {...props.field}/>
        </TableCell>
    </TableRow>
);

export default pure(Row);

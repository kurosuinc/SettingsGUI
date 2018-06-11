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
            {props.field.key}
        </TableCell>
        <TableCell>
            {props.field.text}
        </TableCell>
    </TableRow>
);

export default pure(Row);

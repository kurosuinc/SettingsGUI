import React from 'react';
import { pure } from 'recompose';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Label from '../Atom/Label';
import TextField from '../Atom/TextField';

type Props = {

}

const Row = (props: Props) => (
    <TableRow>
        <TableCell>
            {'a'}
        </TableCell>
        <TableCell>
            {'i'}
        </TableCell>
    </TableRow>
);

export default pure(Row);

import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';

type Props = {

};

const Header = (props: Props) => (
    <TableHead>
        <TableRow>
            <TableCell>{'key'}</TableCell>
            <TableCell>{'value'}</TableCell>
        </TableRow>
    </TableHead>
);

export default onlyUpdateForKeys([])(Header);

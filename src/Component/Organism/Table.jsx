import React from 'react';
import { pure } from 'recompose';
import _Table from '@material-ui/core/Table';
import _TableBody from '@material-ui/core/TableBody';
import Header from '../Molecule/Header';
import Row from '../Molecule/Row';

type Props = {
    fields: Array<Object>,
};

const Table = (props: Props) => (
    <_Table>
        <Header/>
        <_TableBody>
            {props.fields.map((item, index) => <Row key={index}/>)}
        </_TableBody>
    </_Table>
);

export default pure(Table);

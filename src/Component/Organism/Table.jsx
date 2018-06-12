import React from 'react';
import { pure } from 'recompose';
import _Table from '@material-ui/core/Table';
import _TableBody from '@material-ui/core/TableBody';
import Header from '../Molecule/Header';
import Row from '../Molecule/Row';
import type {spreadField} from "../../types/field";

type Props = {
    fields: Array<spreadField>,
    checkText: Function
};

const Table = (props: Props) => (
    <_Table>
        <Header/>
        <_TableBody>
            {props.fields.map((item, index) =>
                <Row key={item.key} index={index} field={item} checkText={props.checkText}/>
            )}
        </_TableBody>
    </_Table>
);

export default pure(Table);

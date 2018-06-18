import React from 'react';
import { pure } from 'recompose';
import List from '@material-ui/core/List';
import Row from '../Molecule/Row';
import type {spreadField} from "../../types/field";

type Props = {
    fields: Array<spreadField>,
    checkText: Function
};

const ItemList = (props: Props) => (
    <List>
        {props.fields.map((item, index) =>
            <Row key={item.key} index={index} field={item} checkText={props.checkText}/>
        )}
    </List>
);

export default pure(ItemList);

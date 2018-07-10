import React from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';
import List from '@material-ui/core/List';
import Row from '../Molecule/Row';
import type {spreadField} from "../../types/field";

const Styled = {
    Root: styled(List)`
        height: 100%;
        overflow: auto;
        background-color: white;
    `,
};

type Props = {
    fields: Array<spreadField>,
    checkText: Function
};

const ItemList = (props: Props) => (
    <Styled.Root>
        {props.fields.map((item, index) =>
            <Row key={item.key} index={index} field={item} checkText={props.checkText}/>
        )}
    </Styled.Root>
);

export default pure(ItemList);

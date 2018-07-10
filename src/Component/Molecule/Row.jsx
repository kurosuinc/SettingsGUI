import React from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';
import ListItem from '@material-ui/core/ListItem';
import TextField from '../Atom/Row/TextField';
import ErrorMessage from '../Atom/Row/ErrorMessage';
import type { spreadField } from "../../types/field";

const StyledListItem = styled(ListItem)`
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
`;

type Props = {
    field: spreadField,
    index: number,
    checkText: Function,
}

const Row = (props: Props) => (
    <StyledListItem>
        <TextField field={props.field} index={props.index} checkText={props.checkText}/>
        {props.field.error ? <ErrorMessage message={props.field.error} /> : <div />}
    </StyledListItem>
);

export default pure(Row);

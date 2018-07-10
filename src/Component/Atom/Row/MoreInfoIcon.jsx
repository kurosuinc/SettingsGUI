// @flow
import React from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
    open: boolean,
};

const Icon = styled(ExpandMoreIcon)`
    transform: ${props => props.open ? 'rotateX(-180deg)' : 'rotateX(0deg)'};
    transition: transform 0.5s ease !important;
`;

const MoreInfoIcon = (props: Props) => (
    <IconButton>
        <Icon open={props.open}/>
    </IconButton>
);

export default pure(MoreInfoIcon);

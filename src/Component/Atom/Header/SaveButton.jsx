import React from 'react';
import {pure} from 'recompose';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Styled = {
    Button: styled(Button)`
        -webkit-app-region: no-drag;
        color: whitesmoke !important;
        border-color: whitesmoke !important;
        font-size: 16px;
    `,
};

type Props = {};

const SaveButton = (props: Props) => (
    <Styled.Button variant="outlined">
        {"保存"}
    </Styled.Button>
);

export default pure(SaveButton);

// @flow
import React from 'react';
import {pure} from 'recompose';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Styled = {
    AppBar: styled(AppBar)`
        -webkit-app-region: drag;
    `,
    Toolbar: styled(Toolbar)`
        -webkit-app-region: drag;
        background-color: gray;
        display: flex;
        justify-content: space-between;
    `,
    Title: styled(Typography)`
        padding-left: 46px;
        -webkit-app-region: drag;
        -webkit-user-select: none;
        cursor: default;
    `,
    Button: styled(Button)`
        -webkit-app-region: no-drag;
        color: whitesmoke !important;
        border-color: whitesmoke !important;
        font-size: 16px;
    `,
};

type Props = {
    appName: string,
};

const WindowAppBar = (props: Props) => (
    <Styled.AppBar position={"static"}>
        <Styled.Toolbar>
            <Styled.Title variant="title" color="inherit">{props.appName}</Styled.Title>
            <Styled.Button variant="outlined">{"保存"}</Styled.Button>
        </Styled.Toolbar>
    </Styled.AppBar>
);

export default pure(WindowAppBar);

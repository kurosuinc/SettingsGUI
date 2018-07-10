// @flow
import React from 'react';
import {pure} from 'recompose';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AppName from '../Atom/Header/AppName';
import SaveButton from '../Atom/Header/SaveButton';

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
};

type Props = {
    appName: string,
};

const WindowAppBar = (props: Props) => (
    <Styled.AppBar position={"static"}>
        <Styled.Toolbar>
            <AppName appName={props.appName} />
            <SaveButton/>
        </Styled.Toolbar>
    </Styled.AppBar>
);

export default pure(WindowAppBar);

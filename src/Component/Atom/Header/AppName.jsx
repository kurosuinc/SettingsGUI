import React from 'react';
import {pure} from 'recompose';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Styled = {
	Text: styled(Typography)`
        padding-left: 46px;
        -webkit-app-region: drag;
        -webkit-user-select: none;
        cursor: default;
    `,
};

type Props = {
    appName: string,
};

const AppName = (props: Props) => (
    <Styled.Text variant="title" color="inherit">
        {props.appName}
    </Styled.Text>
);

export default pure(AppName);

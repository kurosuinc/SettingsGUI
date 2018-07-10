import React from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';
import Typography from '@material-ui/core/Typography';

const StyledTypography = styled(Typography)`
    color: red !important;
    padding-top: 12px;
`;

type Props = {
    message: string,
};

const ErrorMessage = (props: Props) => (
    <StyledTypography noWrap>
        {props.message}
    </StyledTypography>
);

export default pure(ErrorMessage);


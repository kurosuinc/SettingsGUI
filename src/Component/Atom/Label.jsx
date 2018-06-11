import React from 'react';
import { onlyUpdateForKeys } from 'recompose';

type Props = {
    label: string,
};

const Label = (props: Props) => (
    <React.Fragment>{props.label}</React.Fragment>
);

export default onlyUpdateForKeys([])(Label);

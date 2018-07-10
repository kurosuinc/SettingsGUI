// @flow
import React from 'react';
import {pure} from 'recompose';
import styled from 'styled-components';
import WindowAppBar from './Organism/WindowAppBar';
import ItemList from './Organism/ItemList';

const Styled = {
    Root: styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
    `,
    Body: {
        Header: styled(WindowAppBar)`
            -webkit-app-region: drag;
        `,
        Main: styled(ItemList)`
            flex-grow: 1;
        `,
    },
};

type Props = {
    fields: Array<Object>,
    appName: string,
    checkText: Function,
};

const Page = (props: Props) => (
    <Styled.Root>
        <Styled.Body.Header appName={props.appName} />
        <ItemList fields={props.fields} checkText={props.checkText} />
    </Styled.Root>
);

export default pure(Page);

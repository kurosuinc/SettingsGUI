import React from 'react';

import { storiesOf } from '@storybook/react';

import schemaSampleData from '../testdata/schemaSample';

import TextField from '../Atom/TextField.jsx';

storiesOf('Settings Import Field', module)
    .add('basic', () => <TextField schema={schemaSampleData.schema[0]}/>);

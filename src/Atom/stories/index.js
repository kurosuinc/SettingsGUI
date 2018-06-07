import React from 'react';
import { storiesOf } from '@storybook/react';

import TextField from '../TextField.jsx';

storiesOf('Settings Import Field', module)
	.add('basic', () => <TextField schema={schemaSampleData.schema[0]}/>);

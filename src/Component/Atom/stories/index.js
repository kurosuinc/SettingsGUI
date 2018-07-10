import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import TextField from '../Row/TextField.jsx';
import MoreInfoIcons from '../Row/MoreInfoIcon.jsx';

storiesOf('Settings Import Field', module)
	.add('basic', () => <TextField schema={schemaSampleData.schema[0]}/>);

storiesOf('Icon Buttons', module)
    .addDecorator(withKnobs)
    .add('basic', () => <MoreInfoIcons open={boolean('open', false)}/>);

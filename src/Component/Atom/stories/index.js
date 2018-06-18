import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import TextField from '../TextField.jsx';
import MoreInfoIcons from '../MoreInfoIcon';

storiesOf('Settings Import Field', module)
	.add('basic', () => <TextField schema={schemaSampleData.schema[0]}/>);

storiesOf('Icon Buttons', module)
    .addDecorator(withKnobs)
    .add('basic', () => <MoreInfoIcons open={boolean('open', false)}/>);

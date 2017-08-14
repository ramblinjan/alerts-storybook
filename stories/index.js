import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>);


import Alert from '../src/components/Alert/';

//=======
// FILL IN STORIES FOR THE ALERT COMPONENT
// =====

storiesOf('Alert component', module)
  // default alert
  .add('')
  // alert with a yellow background
  .add('')
  // alert with a red background
  .add('')

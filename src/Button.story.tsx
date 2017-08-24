// tslint:disable:no-namespace

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {Button} from './Button';

class XButton extends Button {}
customElements.define('x-button', XButton);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'x-button': any;
    }
  }
}

storiesOf('Button', module)
  .add('Default', () => (
    <x-button role="button" style={{width: 10}} onClick={action('click')}>MyButton</x-button>
  ));

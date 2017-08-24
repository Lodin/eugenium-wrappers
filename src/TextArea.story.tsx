// tslint:disable:no-namespace

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {TextArea} from './TextArea';

class XTextArea extends TextArea {}
customElements.define('x-textarea', XTextArea);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'x-textarea': any;
    }
  }
}

storiesOf('TextArea', module)
  .add('Default', () => (
    <x-textarea onChange={action('keyup')}/>
  ));

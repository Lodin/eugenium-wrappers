import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  const context = require.context("../src", true, /\.story\.tsx$/);
  for (const key of context.keys()) {
    context(key);
  }
}

setOptions({
  downPanelInRight: true,
  name: 'UI Kit',
});

configure(loadStories, module);

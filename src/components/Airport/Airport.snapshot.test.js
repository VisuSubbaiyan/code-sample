import React from 'react';

import { createMountedComponent } from '../../utils/testutil';
import Airport from './Airport';

import { segments } from '../../data.json';

describe('<Airport /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <Airport {...segments[0]} />
  });

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
  })
});
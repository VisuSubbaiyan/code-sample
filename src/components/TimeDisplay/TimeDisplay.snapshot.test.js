import React from 'react';

import { createMountedComponent } from '../../utils/testutil';

import TimeDisplay from './TimeDisplay';

describe('<TimeDisplay /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <TimeDisplay time={1523596800} />
  });

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
  })
});
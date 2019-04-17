import React from 'react';

import { createMountedComponent } from '../../utils/testutil';

import Segments from './Segments';


describe('<Ground /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <Segments />
  });

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
  })
});
import React from 'react';

import { createMountedComponent } from '../../utils/testutil';

import { segments } from '../../data.json';
import Ground from './Ground';


describe('<Ground /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <Ground {...segments[1]} />
  });

  const icon = mountedComponent.find('i');

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
    expect(icon).toHaveLength(1);
  })
});
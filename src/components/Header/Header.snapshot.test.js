import React from 'react';

import Header from './Header';
import { createMountedComponent } from '../../utils/testutil';

describe('<Header /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <Header heading="sample Text" />
  });

  const icon = mountedComponent.find('i');
  const heading = mountedComponent.find('h1');

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
    expect(icon).toHaveLength(1);
    expect(heading).toHaveLength(1);
  })
});
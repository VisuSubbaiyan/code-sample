import React from 'react';

import { createMountedComponent } from '../../utils/testutil';
import IconButton from './IconButton';

describe('<Header /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <IconButton icon='bus' />
  });

  const icon = mountedComponent.find('i');

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
    expect(icon).toHaveLength(1);
  })
});
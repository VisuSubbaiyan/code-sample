import React from 'react';

import { createMountedComponent } from '../../utils/testutil';

import { segments } from '../../data.json';
import BoardingPass from './BoardingPass';

describe('<BoardingPass /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <BoardingPass {...segments[2]} />
  });

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
  })
});
import { mount, shallow } from 'enzyme';
import { prettyPrint } from 'html';

export const mockFunction = jest.fn(value => value);

export const sampleFriend = {
  name: 'Sample friend',
  gender: 'male'
};

export const sampleId = 1;

export const createMountedComponent = ({ children, isShallow }) => {
  const mountedComponent = isShallow ? shallow(children) : mount(children);
  mountedComponent.htmlRender = () => prettyPrint(mountedComponent.html(), { indent_size: 2 });

  return mountedComponent;
};


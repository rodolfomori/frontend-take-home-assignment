import * as React from 'react';

import { shallow } from 'enzyme';

import { Button } from './index';

describe('Button', () => {
  it('Should render the Button component', () => {
    expect(shallow(<Button>My button</Button>)).toMatchSnapshot();
  });
});

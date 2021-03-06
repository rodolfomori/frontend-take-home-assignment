import * as React from 'react';

import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { CardAmount } from '../../src/components';
import theme from '../../src/styles/theme';

export const mountWithTheme = (children: typeof ThemeProvider) =>
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithTheme = (children: typeof ThemeProvider) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const shallowWithTheme = (children: typeof ThemeProvider) =>
  shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<CardAmount />', function() {
  it('should render correctly', () => {
    const component = shallow(<CardAmount />);

    expect(typeof component).toBe('object');

    component.unmount();
  });
});

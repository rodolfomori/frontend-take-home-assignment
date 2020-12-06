import * as React from 'react';

import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { HeaderDashboard } from '../../src/components/Dashboard/HeaderDashboard';
import theme from '../../src/styles/theme';

export const mountWithTheme = (children: any) =>
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithTheme = (children: any) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const shallowWithTheme = (children: any) =>
  shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<HeaderDashboard />', function() {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render correctly', () => {
    const component = shallow(<HeaderDashboard />);

    expect(typeof component).toBe('object');

    component.unmount();
  });
});

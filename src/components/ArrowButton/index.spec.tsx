import * as React from 'react';

import { mount, shallow, render } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { ArrowButton } from '.';
import theme from '../../styles/theme';

export const mountWithTheme = (children: typeof ThemeProvider) =>
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithTheme = (children: typeof ThemeProvider) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const shallowWithTheme = (children: typeof ThemeProvider) =>
  shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<ArrowButton />', function() {
  it('should render correctly', () => {
    const component = shallow(<ArrowButton />);

    expect(typeof component).toBe('object');

    component.unmount();
  });
});

describe('when children prop is defined', () => {
  it('should contain the children prop given', () => {
    const children = 'confirm';

    const component = shallow(<ArrowButton>{children}</ArrowButton>);

    expect(component.text()).toEqual(children);

    component.unmount();
  });
});

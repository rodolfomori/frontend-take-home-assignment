import * as React from 'react';
import { default as NumberFormat } from 'react-number-format';

import styled from 'styled-components';

import { NumberFormatProps } from './index';

export const Container = styled.div``;

export const NumberInput = styled(props => <NumberFormat {...props} />)<
  NumberFormatProps
>`
  background: ${props => props.theme.pallete.whiteBackground};
  border: 1px solid ${props => props.theme.pallete.borderColor};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  width: 100%;
  color: ${props => props.theme.pallete.inputTextColor};
  height: 56px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

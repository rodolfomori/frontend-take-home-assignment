import styled, { css } from 'styled-components';

import {
  TopWrapperProps,
  TextProps,
  MonthlyAmountProps
} from './card.interface';

export const Container = styled.div`
  background: ${props => props.theme.pallete.whiteBackground};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.pallete.borderColor};
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const TopWrapper = styled.div<TopWrapperProps>`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;

  ${props =>
    props.size !== 'small' &&
    css`
      padding-left: 0px;
    `}

  ${props => props.theme.media.desktop} {
    padding-left: 20px;
  }
`;

export const Text = styled.p<TextProps>`
  font-style: normal;
  font-weight: normal;
  line-height: 120%;
  text-align: center;
  display: flex;
  align-items: center;

  color: #1e2a32;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 10px;
  font-size: 20px;

  ${props =>
    (props.size === 'big' || props.size === 'extra') &&
    css`
      font-size: 17px;
    `}

  ${props => props.theme.media.desktop} {
    font-size: 20px;
  }
`;

export const MonthlyAmount = styled.span<MonthlyAmountProps>`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;

  text-align: right;

  color: ${props => props.theme.pallete.textBlue};

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 10px;
  font-size: 32px;

  ${props =>
    props.size === 'extra' &&
    css`
      font-size: ${30 - props.monthlyAmountLength}px;
    `}

  ${props => props.theme.media.desktop} {
    font-size: 32px;
  }
`;

export const BottomWrapper = styled.div`
  background: ${props => props.theme.pallete.backgroud};
  padding: 20px 10px;

  p {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.pallete.textBlack};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 10px;
    text-align: center;
    ${props => props.theme.media.desktop} {
      text-align: left;
    }
  }
  strong {
    font-weight: bold;
  }
`;

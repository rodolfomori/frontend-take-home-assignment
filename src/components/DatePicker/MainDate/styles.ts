import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const textStyle = css`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: ${props => props.theme.pallete.textBlack};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 10px;
`;

export const Mouth = styled.span`
  ${textStyle}
`;

export const Year = styled.span`
  ${textStyle}
  font-weight: 400;
`;

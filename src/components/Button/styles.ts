import { shade, lighten } from 'polished';
import styled from 'styled-components';

const background = {
  hoverColor: shade(0.1, '#1B31A8'),
  onClickColor: lighten(0.1, '#1B31A8')
};

export const Container = styled.button`
  background: ${props => props.theme.pallete.mainBlue};
  border-radius: 32px;
  width: 320px;
  height: 56px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.pallete.whiteBackground};
  border: none;

  &:active {
    background-color: ${background.onClickColor};
  }

  &:hover {
    background-color: ${background.hoverColor};
  }
`;

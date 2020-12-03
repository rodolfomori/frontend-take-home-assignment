import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => props.theme.pallete.whiteBackground};
  border: none;
  min-width: 44px;

  .right {
    transform: rotate(180deg);
  }
`;

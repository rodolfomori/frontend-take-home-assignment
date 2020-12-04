import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.pallete.whiteBackground};
  border: 1px solid ${props => props.theme.pallete.borderColor};
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  height: 56px;

  .right {
    transform: rotate(180deg);
  }
`;

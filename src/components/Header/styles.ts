import styled from 'styled-components';

export const Container = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.whiteBackground};

  img {
    margin-left: 16px;
    height: 24px;
    width: 75px;
  }
`;

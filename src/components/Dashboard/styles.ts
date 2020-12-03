import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  background-color: ${props => props.theme.whiteBackground};
  margin-top: 24px;
  margin-bottom: 30px;
  height: auto;
  padding: 20px;
  width: 100vw;
  max-width: 560px;

  .input {
    margin-bottom: 16px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

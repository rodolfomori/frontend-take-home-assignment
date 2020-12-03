import styled from 'styled-components';
import NumberFormat from 'react-number-format';

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

export const NumberInput = styled(NumberFormat)`
  background: #ffffff;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  width: 100%;
  color: #4d6475;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

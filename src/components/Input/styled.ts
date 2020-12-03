import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const Container = styled.div`
  margin-bottom: 16px;
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

import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => props.theme.mainBlue};
  border-radius: 32px;
  width: 320px;
  height: 56px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.whiteBackground};
  border: none;
`;

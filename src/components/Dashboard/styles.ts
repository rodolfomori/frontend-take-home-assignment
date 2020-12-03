import NumberFormat from 'react-number-format';

import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  background-color: ${props => props.theme.pallete.whiteBackground};
  margin-top: 24px;
  margin-bottom: 30px;
  height: auto;
  padding: 31px 24px 40px 24px;
  width: 100vw;
  max-width: 560px;

  .input {
    margin-bottom: 16px;
  }
`;

export const WrapperElements = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.desktop} {
    display: grid;
    grid-template-columns: 7fr 5fr;
  }
  gap: 16px;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const NumberInput = styled(NumberFormat)`
  background: ${props => props.theme.pallete.whiteBackground};
  border: 1px solid ${props => props.theme.pallete.borderColor};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  width: 100%;
  color: ${props => props.theme.pallete.inputTextColor};

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

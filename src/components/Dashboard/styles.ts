import styled from 'styled-components';

import Money from '../../icons/money';

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
    padding-left: 44px;
  }
`;

export const DollarSign = styled(Money)`
  position: absolute;
  margin-top: 33px;
  margin-left: 17px;
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

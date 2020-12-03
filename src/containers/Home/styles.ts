import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  h2 {
    margin-top: 32px;
    color: ${props => props.theme.pallete.mainBlue};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    strong {
      font-weight: 800;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

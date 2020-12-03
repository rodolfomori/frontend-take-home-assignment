import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.pallete.whiteBackground};
  display: flex;
  align-items: center;
  padding-bottom: 28px;
  border-radius: 8px;

  img {
    max-height: 33px;
  }

  h3 {
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    color: ${props => props.theme.pallete.textBlack};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 10px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${props => props.theme.pallete.textGray};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 10px;
  }
`;

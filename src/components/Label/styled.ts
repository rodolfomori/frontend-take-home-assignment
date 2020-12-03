import styled from 'styled-components';

export const Container = styled.div`
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: ${props => props.theme.pallete.textBlack};
    flex: none;
    order: 0;
    align-self: flex-start;
    flex-grow: 0;
    margin-bottom: 4px;
  }
`;

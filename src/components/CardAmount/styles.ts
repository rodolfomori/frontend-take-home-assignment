import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e9eef2;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    display: flex;
    align-items: center;

    color: #1e2a32;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 10px;
  }

  span {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;

    text-align: right;

    color: #0079ff;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 10px;
  }
`;

export const BottomWrapper = styled.div`
  background: #f4f8fa;
  padding: 20px 10px;

  p {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #1e2a32;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 10px;
    text-align: center;
  }
  strong {
    font-weight: bold;
  }
`;

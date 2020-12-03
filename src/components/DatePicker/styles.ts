import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  height: 56px;
`;

export const ImgButton = styled.button`
  background: #ffffff;
  border: none;
  min-width: 44px;

  .right {
    transform: rotate(180deg);
  }
`;

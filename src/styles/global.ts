import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Work Sans',sans-serif;
    background: #F4F8FA;
    color:#1E2A32;
    -webkit-font-smoothing: antialiased !important;
  }
  button{
    cursor: pointer;
    font-family: 'Work Sans',sans-serif;

  }
`;

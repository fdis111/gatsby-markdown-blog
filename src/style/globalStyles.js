import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main{
    max-width: 65ch;
    padding: 10px;
    margin: auto;
  }  
`;

export default GlobalStyle;

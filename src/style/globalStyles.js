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
  
  .page-content{
    padding: 4rem 0;
  }

  
  ul, ol {
    list-style-position: inside;
    margin-left: 2em;
  }
`;

export default GlobalStyle;

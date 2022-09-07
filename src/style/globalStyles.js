import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }
  
  .page-content{
    padding: 1.5rem 0;
  }

  
  ul, ol {
    list-style-position: inside;
    margin-left: 2em;
  }
  
  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;

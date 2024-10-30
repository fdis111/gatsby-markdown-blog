import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }
  
  body{
    background: #fff9f3;

  }
  .page-content{
    padding: 1.5rem 0;
  }

  
  ul, ol {
    list-style-position: inside;
    margin-left: 2em;
  }
  li{
    margin: .5rem 0;
  }
  
  img{
    max-width: 100%;
    margin: 1rem 0;
  }
`;

export default GlobalStyle;

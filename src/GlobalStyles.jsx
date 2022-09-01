import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {   
    background-color: #f5f5f5;
    font-family: 'Lexend Deca', sans-serif;
  }

  a{
    text-decoration: none;
  }

  li{
    list-style: none;
  }
`;

export default GlobalStyle;

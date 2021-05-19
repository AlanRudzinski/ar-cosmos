import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background: #221B3A;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: white;
    overflow: hidden;
  }

  #root {
      width: 100%;
      height: 100%;
  }
`;
 
export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.colors.mainBg};
    font-family: ${props => props.theme.fonts[0]};
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.mainFont};
    overflow: hidden;
  }

  #root {
      width: 100%;
      height: 100%;
  }
`;
 
export default GlobalStyle;
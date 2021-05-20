import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    box-sizing: border-box;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;
    color: inherit;
    font: inherit;

    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}

  #root {
      width: 100%;
      height: 100%;
  }
`;
 
export default GlobalStyle;
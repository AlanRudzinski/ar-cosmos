import GlobalStyle from './global.styles.js';
import Mainpage from './components/Mainpage/Mainpage.component';
import { ThemeProvider } from 'styled-components';
import ModalProvider from './context/modalContext';
import { theme } from './mainTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>  
      <ModalProvider>
            <GlobalStyle />
            <Mainpage />
      </ModalProvider>
    </ThemeProvider>    
  );
}

export default App;

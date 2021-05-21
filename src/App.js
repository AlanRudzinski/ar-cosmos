import GlobalStyle from './global.styles.js';
import Mainpage from './components/Mainpage/Mainpage.component';
import { ThemeProvider } from 'styled-components';
import ModalProvider from './context/modalContext';
import { theme } from './mainTheme';
import RocketProvider from './context/rocketContext';

function App() {
  return (
    <ThemeProvider theme={theme}>  
      <RocketProvider>
          <ModalProvider>
                <GlobalStyle />
                <Mainpage />
          </ModalProvider>
      </RocketProvider>
    </ThemeProvider>    
  );
}

export default App;

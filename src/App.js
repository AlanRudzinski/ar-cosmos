import GlobalStyle from './global.styles.js'
import Mainpage from './components/mainpage/mainpage.component'
import MainTheme from './MainTheme'


function App() {
  return (
    <MainTheme>
      <GlobalStyle />
      <Mainpage />
    </MainTheme>
  );
}

export default App;

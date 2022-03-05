import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { usePersistedState } from './utils/usePersistedState';
import GlobalStyle from './styles/global'
import Header from './components/Header';
import Button from './components/Button';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <Button toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>

  );
}

export default App;

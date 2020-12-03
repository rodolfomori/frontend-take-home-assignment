import * as React from 'react';
import GlobalStyle from './styles/global';
import { Home } from './containers/Home';
import { ThemeProvider } from 'styled-components';
import pallete from './styles/palette';
import AppProvider from './hooks';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={pallete}>
      <AppProvider>
        <Home />
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

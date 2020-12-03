import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import { Home } from './containers/Home';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Home />
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

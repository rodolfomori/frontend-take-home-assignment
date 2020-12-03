import * as React from 'react';
import GlobalStyle from './styles/global';
import { Home } from './containers/Home';
import { ThemeProvider } from 'styled-components';
import pallete from './styles/palette';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={pallete}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

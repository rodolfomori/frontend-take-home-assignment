import * as React from 'react';

import { DataProvider } from './data';

const AppProvider: React.FC = ({ children }) => (
  <DataProvider>{children}</DataProvider>
);

export default AppProvider;

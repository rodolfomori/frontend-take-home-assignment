import * as React from 'react';

import { GoalCalculationProvider } from './goalCalculation';

const AppProvider: React.FC = ({ children }) => (
  <GoalCalculationProvider>{children}</GoalCalculationProvider>
);

export default AppProvider;

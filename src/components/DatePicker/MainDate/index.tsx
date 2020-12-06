import * as React from 'react';

import { useGoalCalculation } from '../../../hooks/goalCalculation';
import { getMonthName } from '../../../utils';
import { Container, Mouth, Year } from './styles';

export const MainDate: React.FC = () => {
  const { chosenMonth, chosenYear } = useGoalCalculation();

  return (
    <Container>
      <Mouth data-testid="date-picker-mounth">
        {getMonthName(chosenMonth)}
      </Mouth>
      <Year data-testid="date-picker-year">{chosenYear}</Year>
    </Container>
  );
};

import * as React from 'react';

import { useData } from '../../../hooks/data';
import { getMonthName } from '../../../utils';
import { Container, Mouth, Year } from './styles';

export const MainDate: React.FC = () => {
  const { chosenMonth, chosenYear } = useData();

  return (
    <Container>
      <Mouth data-testid="date-picker-mounth">
        {getMonthName(chosenMonth)}
      </Mouth>
      <Year data-testid="date-picker-year">{chosenYear}</Year>
    </Container>
  );
};

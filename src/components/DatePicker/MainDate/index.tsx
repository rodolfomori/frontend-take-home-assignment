import * as React from 'react';

import { Container, Mouth, Year } from './styles';
import { useData } from '../../../hooks/data';
import { getMonth } from '../../../utils';

export const MainDate: React.FC = () => {
  const { chosenMonth, chosenYear } = useData();

  return (
    <Container>
      <Mouth> {getMonth(chosenMonth)}</Mouth>
      <Year>{chosenYear}</Year>
    </Container>
  );
};

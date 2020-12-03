import * as React from 'react';

import { Container, Mouth, Year } from './styles';

export const MainDate: React.FC = () => {
  return (
    <Container>
      <Mouth>October</Mouth>
      <Year>2020</Year>
    </Container>
  );
};

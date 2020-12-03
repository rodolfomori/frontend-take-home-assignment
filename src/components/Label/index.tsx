import * as React from 'react';

import { Container } from './styled';

export const Label: React.FC = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
};

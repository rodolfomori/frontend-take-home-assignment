import * as React from 'react';

import house from '../../../icons/house.png';
import { Container } from './styles';

export const HeaderDashboard: React.FC = () => {
  return (
    <Container>
      <img src={house} alt="origin-logo" />
      <div>
        <h3>Buy a house</h3>
        <p>Saving goal</p>
      </div>
    </Container>
  );
};

import * as React from 'react';

import House from '../../../icons/house.png';
import { Container } from './styles';

export const HeaderDashboard: React.FC = () => {
  return (
    <Container>
      <img src={House} alt="origin-logo" />
      <div>
        <h3>Buy a house</h3>
        <p>Saving goal</p>
      </div>
    </Container>
  );
};

import * as React from 'react';

import { Button, Input, CardAmount, DatePicker } from '../index';
import { Container, WrapperButton } from './styles';
import { HeaderDashboard } from './HeaderDashboard';
export const Dashboard: React.FC = () => {
  return (
    <Container>
      <HeaderDashboard />
      <Input className="input" />
      <DatePicker />
      <CardAmount />
      {/* <Button>confirm</Button> */}
      <WrapperButton>
        <Button>confirm</Button>
      </WrapperButton>
    </Container>
  );
};

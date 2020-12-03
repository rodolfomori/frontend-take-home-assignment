import * as React from 'react';
import { Header, Dashboard } from '../../components';
import { Container, Wrapper } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <h2>
          Let's plan your <strong>saving goal.</strong>
        </h2>
        <Dashboard />
      </Wrapper>
    </Container>
  );
};

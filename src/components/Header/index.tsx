import * as React from 'react';

import logo from '../../icons/logo.svg';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="origin-logo" />
    </Container>
  );
};

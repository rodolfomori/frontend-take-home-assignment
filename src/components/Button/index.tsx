import { ButtonHTMLAttributes } from 'react';
import * as React from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  ...rest
}) => <Container {...rest}>{isLoading ? 'Carregando...' : children}</Container>;

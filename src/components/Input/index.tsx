import * as React from 'react';
import { NumberInput, Container } from './styled';
import NumberFormat from 'react-number-format';
import { Label } from '../index';

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export function Input(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...rest } = props;

  return (
    <Container>
      <Label>Total amount</Label>
      <NumberInput thousandSeparator={true} prefix={'$'} />
    </Container>
  );
}

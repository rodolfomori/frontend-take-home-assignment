import * as React from 'react';

import { Label } from '../index';
import { NumberFormatProps } from './input.interface';
import { NumberInput, Container } from './styled';

export function Input({
  defaultValue,
  placeholder,
  allowEmptyFormatting,
  thousandSeparator,
  allowNegative,
  prefix,
  value,
  maxValue,
  ...rest
}: NumberFormatProps) {
  return (
    <Container>
      <Label>Total amount</Label>
      <NumberInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        allowEmptyFormatting={allowEmptyFormatting}
        thousandSeparator={thousandSeparator}
        allowNegative={allowNegative}
        prefix={prefix}
        value={value > maxValue ? maxValue : value}
        {...rest}
      />
    </Container>
  );
}

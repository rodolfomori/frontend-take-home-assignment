import * as React from 'react';

import { Label } from '../index';
import { NumberInput, Container } from './styled';

interface NumberFormatValues {
  floatValue: number;
  formattedValue: string;
  value: string;
}

export interface NumberFormatProps
  extends React.HTMLAttributes<HTMLInputElement> {
  thousandSeparator?: boolean | ',' | '.' | ' ';
  decimalSeparator?: boolean | ',' | '.';
  decimalScale?: number;
  fixedDecimalScale?: boolean;
  allowNegative?: boolean;
  allowEmptyFormatting?: boolean;
  prefix?: string;
  value?: number | string;
  isNumericString?: boolean;
  displayType?: 'input' | 'text';
  type?: 'text' | 'tel';
  format?: string | Function;
  removeFormatting?: (formattedValue: string) => string;
  mask?: string;
  onValueChange?: (
    values: NumberFormatValues,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isAllowed?: (values: NumberFormatValues) => boolean;
  renderText?: (formattedValue: string) => React.ReactNode;
}

export function Input({
  defaultValue,
  placeholder,
  allowEmptyFormatting,
  thousandSeparator,
  allowNegative,
  prefix,
  value,
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
        value={value}
        {...rest}
      />
    </Container>
  );
}

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
  maxValue?: number;
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

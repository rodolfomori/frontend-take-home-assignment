import * as React from 'react';

import { Button, Input, CardAmount, DatePicker } from '../index';
import { Container, WrapperButton, NumberInput } from './styles';
import { HeaderDashboard } from './HeaderDashboard';
import { currencyFormatter } from '../../utils';
import NumberFormat from 'react-number-format';
import { useData } from '../../hooks/data';

export const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = React.useState(25000);
  const { totalAmount, setTotalAmount } = useData();

  return (
    <Container>
      <HeaderDashboard />
      <Input
        defaultValue={0}
        placeholder={'$ 0,00'}
        allowEmptyFormatting={true}
        thousandSeparator={true}
        allowNegative={false}
        prefix={'$'}
        value={totalAmount}
        onValueChange={values => {
          const { floatValue } = values;
          setTotalAmount(floatValue);
        }}
      />

      <DatePicker />
      <CardAmount />
      <WrapperButton>
        <Button>confirm</Button>
      </WrapperButton>
    </Container>
  );
};

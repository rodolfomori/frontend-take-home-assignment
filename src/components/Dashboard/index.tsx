import * as React from 'react';

import { useData } from '../../hooks/data';
import { Button, Input, CardAmount, DatePicker } from '../index';
import { HeaderDashboard } from './HeaderDashboard';
import { Container, WrapperButton, WrapperElements } from './styles';

export const Dashboard: React.FC = () => {
  const { totalAmount, setTotalAmount } = useData();
  interface Values {
    floatValue: number;
    formattedValue: string;
    value: string;
  }

  return (
    <Container>
      <HeaderDashboard />
      <WrapperElements>
        <Input
          defaultValue={0}
          placeholder={'$ 0,00'}
          allowEmptyFormatting={true}
          thousandSeparator={true}
          allowNegative={false}
          prefix={'$'}
          value={totalAmount}
          onValueChange={(values: Values) => {
            const { floatValue } = values;
            setTotalAmount(floatValue);
          }}
        />

        <DatePicker />
      </WrapperElements>
      <CardAmount />
      <WrapperButton>
        <Button>confirm</Button>
      </WrapperButton>
    </Container>
  );
};

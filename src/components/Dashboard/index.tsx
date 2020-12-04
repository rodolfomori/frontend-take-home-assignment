import * as React from 'react';

import { useData } from '../../hooks/data';
import { Button, Input, CardAmount, DatePicker } from '../index';
import { HeaderDashboard } from './HeaderDashboard';
import {
  Container,
  WrapperButton,
  WrapperElements,
  DollarSign
} from './styles';
export const Dashboard: React.FC = () => {
  const { totalAmount, setTotalAmount } = useData();

  return (
    <Container>
      <HeaderDashboard />
      <WrapperElements>
        <div>
          <DollarSign />
          <Input
            data-testid="input-total-amount"
            defaultValue={0}
            placeholder={''}
            allowEmptyFormatting={true}
            thousandSeparator={true}
            allowNegative={false}
            className="input"
            value={totalAmount}
            onValueChange={values => {
              const { floatValue } = values;
              setTotalAmount(floatValue);
            }}
          />
        </div>

        <DatePicker />
      </WrapperElements>
      <CardAmount />
      <WrapperButton>
        <Button>confirm</Button>
      </WrapperButton>
    </Container>
  );
};

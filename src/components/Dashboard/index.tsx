import * as React from 'react';

import { useGoalCalculation } from '../../hooks/goalCalculation';
import { Button, Input, CardAmount, DatePicker } from '../index';
import { HeaderDashboard } from './HeaderDashboard';
import {
  Container,
  WrapperButton,
  WrapperElements,
  DollarSign
} from './styles';
export const Dashboard: React.FC = () => {
  const { totalAmount, setTotalAmount } = useGoalCalculation();

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
            maxValue={10000000000}
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

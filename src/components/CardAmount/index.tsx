import * as React from 'react';

import { useGoalCalculation } from '../../hooks/goalCalculation';
import { currencyFormatter, getMonthName } from '../../utils';
import {
  Container,
  TopWrapper,
  BottomWrapper,
  MonthlyAmount,
  Text
} from './styles';

export interface MonthlyAmountProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  'data-testid': string;
  // size: string;
}

export interface TopWrapperProps extends React.HTMLAttributes<HTMLSpanElement> {
  size: string;
}

export const CardAmount: React.FC = () => {
  const [size, setSize] = React.useState<string>('small');
  const {
    totalAmount,
    monthlyAmount,
    chosenMonth,
    chosenYear,
    mounthQuantity
  } = useGoalCalculation();

  React.useEffect(() => {
    if (Number(monthlyAmount) > 99999) {
      setSize('big');
    } else if (Number(monthlyAmount) > 9999) {
      setSize('medium');
    } else {
      setSize('small');
    }
    console.log(monthlyAmount.length);
  }, [monthlyAmount]);

  return (
    <Container>
      <TopWrapper size={size}>
        <Text size={size}>Monthly amount</Text>
        <MonthlyAmount data-testid="monthly-amount">
          {monthlyAmount && !isNaN(Number(monthlyAmount))
            ? currencyFormatter(Number(monthlyAmount))
            : '$0'}
        </MonthlyAmount>
      </TopWrapper>
      <BottomWrapper>
        <p>
          You’re planning <strong>{mounthQuantity} monthly deposits</strong> to
          reach your{' '}
          <strong data-testid="goal-value">
            {totalAmount ? currencyFormatter(Number(totalAmount)) : '$0'}
          </strong>{' '}
          goal by{' '}
          <strong data-testid="final-date">
            {getMonthName(chosenMonth)} {chosenYear}.
          </strong>
        </p>
      </BottomWrapper>
    </Container>
  );
};

import * as React from 'react';

import { useData } from '../../hooks/data';
import { currencyFormatter, getMonthName } from '../../utils';
import { Container, TopWrapper, BottomWrapper } from './styles';

export const CardAmount: React.FC = () => {
  const {
    totalAmount,
    monthlyAmount,
    chosenMonth,
    chosenYear,
    mounthQuantity
  } = useData();

  return (
    <Container>
      <TopWrapper>
        <p>Monthly amount</p>
        <span data-testid="monthly-amount">
          {monthlyAmount && !isNaN(Number(monthlyAmount))
            ? currencyFormatter(Number(monthlyAmount))
            : '$0'}
        </span>
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

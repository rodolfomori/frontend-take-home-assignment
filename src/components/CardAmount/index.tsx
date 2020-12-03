import * as React from 'react';

import { Container, TopWrapper, BottomWrapper } from './styles';
import { useData } from '../../hooks/data';
import { currencyFormatter, getMonth } from '../../utils';

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
        <span>{monthlyAmount}</span>
      </TopWrapper>
      <BottomWrapper>
        <p>
          You’re planning <strong>{mounthQuantity} monthly deposits</strong> to
          reach your{' '}
          <strong>
            {totalAmount ? currencyFormatter(Number(totalAmount)) : '$0'}{' '}
          </strong>
          goal by
          <strong>
            {' '}
            {getMonth(chosenMonth)} {chosenYear}.
          </strong>
        </p>
      </BottomWrapper>
    </Container>
  );
};

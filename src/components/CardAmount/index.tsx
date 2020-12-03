import * as React from 'react';

import { Container, TopWrapper, BottomWrapper } from './styles';

export const CardAmount: React.FC = () => {
  return (
    <Container>
      <TopWrapper>
        <p>Monthly amount</p>
        <span>$521</span>
      </TopWrapper>
      <BottomWrapper>
        <p>
          You’re planning <strong>48 monthly deposits</strong> to reach your{' '}
          <strong>$25,000 </strong>goal by
          <strong>October 2020.</strong>
        </p>
      </BottomWrapper>
    </Container>
  );
};

import * as React from 'react';

import { useGoalCalculation } from '../../hooks/goalCalculation';
import Arrow from '../../icons/Arrow';
import { Label, MainDate, ArrowButton } from '../index';
import { Container } from './styles';

export const DatePicker: React.FC = () => {
  const { increaseDate, decreaseDate } = useGoalCalculation();

  React.useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e?.keyCode === 37) decreaseDate();
      else if (e?.keyCode === 39) increaseDate();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [decreaseDate, increaseDate]);

  return (
    <div>
      <Label>Reach goal by</Label>
      <Container>
        <ArrowButton
          data-testid="decrese-button"
          onClick={() => decreaseDate()}
        >
          <Arrow />
        </ArrowButton>
        <MainDate />
        <ArrowButton
          data-testid="increase-button"
          onClick={() => increaseDate()}
        >
          <Arrow className="right" />
        </ArrowButton>
      </Container>
    </div>
  );
};

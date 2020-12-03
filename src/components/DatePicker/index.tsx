import * as React from 'react';

import { useData } from '../../hooks/data';
import Arrow from '../../icons/arrow.svg';
import { Label, MainDate, ArrowButton } from '../index';
import { Container } from './styles';

export const DatePicker: React.FC = () => {
  const { increaseDate, decreaseDate } = useData();

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
          <img src={Arrow} alt="button-left" />
        </ArrowButton>
        <MainDate />
        <ArrowButton
          data-testid="increase-button"
          onClick={() => increaseDate()}
        >
          <img src={Arrow} className="right" alt="button-rigth" />
        </ArrowButton>
      </Container>
    </div>
  );
};

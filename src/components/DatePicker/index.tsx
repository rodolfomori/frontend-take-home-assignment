import * as React from 'react';

import { useData } from '../../hooks/data';
import Arrow from '../../icons/arrow.svg';
import { Label } from '../index';
import { MainDate } from './MainDate';
import { Container, ImgButton } from './styles';

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
        <ImgButton onClick={decreaseDate}>
          <img src={Arrow} alt="button-left" />
        </ImgButton>
        <MainDate />
        <ImgButton onClick={increaseDate}>
          <img src={Arrow} className="right" alt="button-rigth" />
        </ImgButton>
      </Container>
    </div>
  );
};

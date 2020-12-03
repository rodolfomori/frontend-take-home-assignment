import * as React from 'react';

import { Label } from '../index';
import { Container, ImgButton } from './styles';
import Arrow from '../../icons/arrow.svg';
import { MainDate } from './MainDate';
import { useData } from '../../hooks/data';

export const DatePicker: React.FC = () => {
  const { increaseDate, decreaseDate } = useData();

  const handleKeyDown = (e: any) => {
    if (e?.keyCode === 37) decreaseDate();
    else if (e?.keyCode === 39) increaseDate();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
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
    </>
  );
};

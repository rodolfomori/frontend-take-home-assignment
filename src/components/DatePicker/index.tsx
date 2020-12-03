import * as React from 'react';

import { Label } from '../index';
import { Container, ImgButton } from './styles';
import Arrow from '../../icons/arrow.svg';
import { MainDate } from './MainDate';

export const DatePicker: React.FC = () => {
  const lessMonth = (): void => {
    console.log('less');
  };

  const moreMonth = (): void => {
    console.log('more');
  };

  const handleKeyDown = (e: any) => {
    if (e?.keyCode === 37) lessMonth();
    else if (e?.keyCode === 39) moreMonth();
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
        <ImgButton onClick={lessMonth}>
          <img src={Arrow} alt="button-left" />
        </ImgButton>
        <MainDate />
        <ImgButton onClick={moreMonth}>
          <img src={Arrow} className="right" alt="button-rigth" />
        </ImgButton>
      </Container>
    </>
  );
};

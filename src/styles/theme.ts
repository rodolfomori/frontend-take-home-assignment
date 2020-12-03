import { DefaultTheme } from 'styled-components';

const customMediaQuery = (width: number) => `@media (min-width: ${width}px)`;

const theme: DefaultTheme = {
  pallete: {
    backgroud: '#F4F8FA',
    whiteBackground: '#FFFFFF',
    grayBackground: '#E5E5E5',
    mainBlue: '#1B31A8',
    textBlue: '#0079FF',
    textBlack: '#1E2A32',
    textGray: '#708797',
    borderColor: '#e9eef2',
    inputTextColor: '#4D6475'
  },
  media: {
    desktop: customMediaQuery(560)
  }
};

export default theme;

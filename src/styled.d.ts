import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallete: {
      backgroud: string;
      whiteBackground: string;
      grayBackground: string;
      mainBlue: string;
      textBlue: string;
      textBlack: string;
      textGray: string;
      borderColor: string;
      inputTextColor: string;
    };
    media: {
      desktop: string;
    };
  }
}

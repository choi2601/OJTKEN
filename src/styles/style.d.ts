import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      abvAlert: {
        low: string;
        medium: string;
        high: string;
      };
    };
    abvRatio: {
      low: number;
      high: number;
    };
    layer: {
      nav: number;
      background: number;
      contents: number;
    };
    animation: {
      modalIn: (timeout: number) => string;
    };
  }
}

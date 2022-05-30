import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    blue: {
      100: '#d0ebff',
      200: '#a5d8ff',
      300: '#74c0fc',
      400: '#4dabf7',
      500: '#339af0',
      600: '#228be6',
      700: '#1c7ed6',
      800: '#1971c2',
      900: '#1864ab',
    },
    abvAlert: {
      low: '#F8D70C',
      medium: '#64D90B',
      high: '#FA350F',
    },
  },
  abvRatio: {
    low: 5,
    high: 10,
  },
  layer: {
    nav: 9997,
    background: 9998,
    contents: 9999,
  },
  animation: {
    modalIn: (timeout) => `
  animation: modal-in ${timeout}s;

  @keyframes modal-in {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  `,
  },
};

export { theme };

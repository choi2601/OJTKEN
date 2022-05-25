import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
     @font-face {
        font-family: 'Roboto-Bold';
        src: url('/font/Roboto-Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

   @font-face {
       font-family: 'Roboto-Regular';
       src: url('/font/Roboto-Regular.woff') format("woff");
       font-weight: normal;
       font-style: normal;
   }

    @font-face {
        font-family: 'Roboto-Light';
        src: url('/font/Roboto-Light.woff') format("woff");
        font-weight: normal;
        font-style: normal;
    }
`;

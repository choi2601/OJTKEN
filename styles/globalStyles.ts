import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
   
    @font-face {
        font-family: 'Roboto-Bold';
        src: url('/font/Roboto-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

   @font-face {
       font-family: 'Roboto-Regular';
       src: url('/font/Roboto-Regular.ttf') format("truetype");
       font-weight: normal;
       font-style: normal;
   }

    @font-face {
        font-family: 'Roboto-Light';
        src: url('/font/Roboto-Light.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalStyle;

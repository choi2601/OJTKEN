import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        list-style: none;
    }
    body {
        background-color: #e9ecef;
    }
    a {
        display: block;
        text-decoration: none;
        outline: none;
    }    
`;

export default GlobalStyle;

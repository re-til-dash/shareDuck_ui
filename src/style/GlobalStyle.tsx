import { createGlobalStyle } from "styled-components";
import global from "./global.json";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: ${global.fontFamilies.suit};
        src: url() ;
        font-style: normal;
        font-weight: ${global.fontWeights.reqular};
    }
    
`;

export default GlobalStyle;

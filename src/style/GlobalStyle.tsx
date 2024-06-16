import { DefaultTheme, createGlobalStyle } from "styled-components";
import global from "./global.json";

//GPT
function createThemeVariables(theme: DefaultTheme): string {
  return Object.keys(theme)
    .map(
      (key) =>
        `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${
          theme[key as keyof DefaultTheme]
        };`
    )
    .join(" ");
}

const GlobalStyle = createGlobalStyle`

    :root {
        ${({ theme }) => createThemeVariables(theme)}
    }

    @font-face {
        font-family: ${global.fontFamilies.suit};
        src: url() ;
        font-style: normal;
        font-weight: ${global.fontWeights.reqular};
    }
    
`;

export default GlobalStyle;

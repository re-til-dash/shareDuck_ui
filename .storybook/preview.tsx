// Replace your-framework with the framework you are using (e.g., react, vue3)
import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/style/GlobalStyle";
import LightTheme from "../src/style/LightTheme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ["autodocs"],
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;

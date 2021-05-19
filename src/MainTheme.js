import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    mainBg: '#221B3A',
    lightBg: '#2B2347',
    modalBg: '#2B224A',
    mainFont: 'white',
    lightViolet: '#7860D7',
    lightRed: '#E34A67',
    teal: '#00C9B7',

    greenActive: '#05C9B7',
  },
  fonts: ["'Inter', sans-serif"],
  fontSizes: {
    medium: "14px",
  }
};

const MainTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MainTheme;


import { createMuiTheme } from '@material-ui/core/styles';  

import { spacing } from './variables';

export const theme = createMuiTheme({
  spacing,
  palette: {
    primary: {
      light: "#222A45",
      main: "#24292e",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#7467ef",
    },
    warning: {
      main: "#ff9e43"
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.2)"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#222A45"
      },
    },
  }
});

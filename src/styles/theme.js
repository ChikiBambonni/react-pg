import { createMuiTheme } from '@material-ui/core/styles';  

import { 
  spacing,
  primaryColors,
  secondaryColors,
  errorColors,
  warningColors,
  infoColors,
  successColors,
  textColors
} from './variables';

export const theme = createMuiTheme({
  spacing,
  palette: {
    primary: primaryColors,
    secondary: secondaryColors,
    warning: warningColors,
    error: errorColors,
    success: successColors,
    info: infoColors,
    text: textColors
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#222A45"
      },
    },
  }
});

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  selected: {
    borderBottom: `1px solid ${theme.palette.warning.main}`
  }
}));

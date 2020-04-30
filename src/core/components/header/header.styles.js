import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  indicator: {
    backgroundColor: theme.palette.warning.main
  }
}));

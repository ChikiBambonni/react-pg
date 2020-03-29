import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  table: {
    height: "100%",
    boxShadow: "none",
    backgroundColor: "inherit"
  },
  root: {
    color: theme.palette.text.secondary,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
  }
}));

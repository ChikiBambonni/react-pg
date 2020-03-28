import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "fit-content",
    padding: 24,
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.main
  }
}));

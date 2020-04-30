import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  "errorMessage": {
    position: "absolute",
    color: theme.palette.error.main,
    textAlign: "left",
    "& h5": {
      fontSize: 16
    },
    "& p": {
      fontSize: 14
    }
  }
}));

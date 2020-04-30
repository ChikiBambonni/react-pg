import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  caption: {
    color: theme.palette.text.secondary
  },
  selectIcon: {
    color: theme.palette.text.secondary
  },
  select: {
    color: theme.palette.text.secondary
  },
  actions: {
    color: theme.palette.text.secondary
  }
}));

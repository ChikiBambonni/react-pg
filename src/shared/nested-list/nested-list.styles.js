import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 270,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    overflowY: "auto"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  itemIcon: {
    color: theme.palette.text.secondary
  }
}));

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 270,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    overflowY: "auto"
  },
  nestedListSubheader: {
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
  },
  nested: {
    paddingLeft: theme.spacing(12) 
  },
  itemIcon: {
    color: theme.palette.text.secondary
  },
  error: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}));

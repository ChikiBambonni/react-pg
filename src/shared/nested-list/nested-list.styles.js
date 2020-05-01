import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 270,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    overflowY: "auto"
  },
  nestedListSubheader: {
    position: "relative",
    zIndex: 0,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
  },
  nested: {
    paddingLeft: theme.spacing(12) 
  },
  active: {
    backgroundColor: theme.palette.warning.dark,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  itemIcon: {
    color: theme.palette.text.secondary
  },
  error: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}));

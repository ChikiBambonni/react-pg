import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
    color: theme.palette.text.disabled,
    "&:hover": {
      "& .icon": {
        color: theme.palette.text.secondary,
        background: theme.palette.secondary.light,
        borderRadius: "100%"
      }
    }
  },
  filtersWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    boxShadow: "5px 5px 10px rgba(0,0,0,.3)",
  },
  filtersContainer: {
    minWidth: 220,
    padding: theme.spacing(4)
  },
  searchContainer: {
    
  },
  iconSearch: {
    color: theme.palette.text.primary
  },
  selectAllContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginLeft: theme.spacing(-4),
    marginRight: theme.spacing(-4),
    borderBottom: `1px solid ${theme.palette.text.disabled}`
  },
  selectContainer: {
    position: "relative",
    minHeight: 220,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginLeft: theme.spacing(-4),
    marginRight: theme.spacing(-4),
    marginBottom: theme.spacing(-4),
  },
  virtualizedList: {
    outline: "none"
  }
}));

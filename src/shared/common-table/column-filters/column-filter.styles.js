import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  filtersWrapper: {
    position: "absolute",
    top: 70,
    left: 224,
    boxShadow: "5px 5px 10px rgba(0,0,0,.3)",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
      "& .icon": {
        background: theme.palette.secondary.dark,
        borderRadius: "100%"
      }
    }
  }
}));

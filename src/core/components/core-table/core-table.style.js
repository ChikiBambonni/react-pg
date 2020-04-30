import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    padding: theme.spacing(6),
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.main
  },
  tableContainer: {
    height: "100%",
    "& > div.tableWrapper": {
      height: "90%"
    },
    "& > div.paginatorWrapper": {
      position: "relative",
      height: "10%"
    }
  }
}));

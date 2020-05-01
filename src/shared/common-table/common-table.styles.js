import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  table: {
    height: "100%",
    boxShadow: "none",
    backgroundColor: "inherit",
    overflow: "auto",
  },
  root: {
    color: theme.palette.text.secondary,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
  },
  sticky: {
    position: "sticky",
    top: 0,
    backgroundColor: theme.palette.secondary.main
  },
  tableRow: {
    "&:hover": {
      background: "rgba(0, 0, 0, 0.15)",
      cursor: "pointer"
    },
  },
  cellContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between"
  }
}));

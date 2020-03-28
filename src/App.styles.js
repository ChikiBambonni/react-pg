import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  app: {
    width: "inherit",
    height: "inherit"
  },
  uiHeader: {
    borderBottom: '1px solid #ffffff'
  },
  uiContainer: {
    display: "flex",
    height: `calc(100% - ${40}px)` // TODO: move to theme
  }
});

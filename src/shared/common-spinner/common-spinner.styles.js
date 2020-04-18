import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  loadingShade: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 53,
    background: "rgba(0, 0, 0, 0.15)",
    alignItems: "center",
    justifyContent: "center"
  }
});

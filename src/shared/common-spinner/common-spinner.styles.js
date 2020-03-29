import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  loadingShade: {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.15)",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

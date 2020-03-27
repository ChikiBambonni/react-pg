import {makeStyles} from "@material-ui/core/styles";

import {headerHeight} from "@styles";

export const useStyles = makeStyles({
  "app": {
    "width": "inherit",
    "height": "inherit"
  },
  "uiContainer": {
    "display": "flex",
    "height": `calc(100% - ${headerHeight}px)`
  }
});

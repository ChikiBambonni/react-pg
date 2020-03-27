import {makeStyles} from "@material-ui/core/styles";

import {dangerColor} from "@styles";

export const useStyles = makeStyles({
  "errorMessage": {
    "position": "absolute",
    "color": dangerColor, // TODO: use theme there
    "textAlign": "left",
    "& > h5": {
      "fontSize": 16
    },
    "& > p": {
      "fontSize": 14
    }
  }
});

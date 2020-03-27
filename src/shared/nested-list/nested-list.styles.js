import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "root": {
    "width": "100%",
    "maxWidth": 270,
    "backgroundColor": theme.palette.background.paper,
    "overflowY": "auto"
  },
  "nested": {
    "paddingLeft": theme.spacing(4)
  }
}));

import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.text.secondary,
      outline: '1px solid slategrey',
      borderRadius: 4
    }
  },  
  app: {
    width: "inherit",
    height: "inherit"
  },
  uiHeader: {
    borderBottom: '1px solid #ffffff'
  },
  uiContainer: {
    display: "flex",
    height: `calc(100% - ${49}px)` // TODO: move to theme
  }
}));

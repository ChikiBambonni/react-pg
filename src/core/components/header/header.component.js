import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './header.component.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

/* export const Header = ({ items }) => {
  return (
    <header id="nav-header">
      <div className="links-container">
        <ul className="nav-list nav-list-font">
          {items.map(item => (
            <li key={item.title} className="nav-list-item">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}; */

export const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two"/>
          <Tab label="Item Three"/>
        </Tabs>
      </AppBar>
    </div>
  );
};

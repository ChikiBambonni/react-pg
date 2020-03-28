import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import {useStyles} from "./header.styles";

export function Header () {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const items = [
    "Item One",
    "Item Two",
    "Item Three"
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          inkBarStyle={{background: 'blue'}}
          onChange={handleChange}
          value={value}>
          {items.map(item => (
            <Tab
              key={item}
              label={item}
              classes={{
                selected: classes.selected
              }}>
            </Tab>
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}

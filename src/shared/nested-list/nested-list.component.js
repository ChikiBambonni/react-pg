import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { 
  compose,
  curry,
  insert,
  remove,
  repeat,
  isEmpty
} from "ramda";
import classNames from "classnames";

import { ErrorMessage } from "@shared/error-message";
import { useStyles } from "./nested-list.styles";

export const NestedList = ({ 
  items,
  onItemClick,
  error 
}) => {
  const classes = useStyles();

  const [open, setOpen]         = useState(repeat(false, items.length));
  const [selected, setSelected] = useState({}); 

  useEffect(() => {
    if (!isEmpty(items)) {
      setSelected({
        database: items[0].title,
        collection: items[0].children[0]
      });
      handleSectionClick(0); 
    }
  }, [items]);

  const handleSectionClick = i => {
    setOpen(
      compose(
        curry(insert(i, !open[i])),
        curry(remove(i, 1))
      )(open)
    );
  };

  const handleItemClick = (title, child) => {
    const item = {
      database: title,
      collection: child
    };
    setSelected(item);
    onItemClick(item);
  };

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader 
          component="div" 
          className={classes.nestedListSubheader}
        >
          Collections
        </ListSubheader>
      }
      className={classes.root}
    >
      <div className={classes.error}>
        <ErrorMessage error={error} />
      </div>
      {items.map((item, index) => (
        <div 
          key={item.title} 
          className="nested-list-item"
        >
          <ListItem 
            button 
            onClick={() => handleSectionClick(index)}
          >
            <ListItemIcon className={classes.itemIcon}>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse 
            in={open[index]}
            timeout="auto"
            unmountOnExit
          >
            <List 
              component="div"
              disablePadding
            >
              {item.children.map(child => (
                <ListItem 
                  key={child} 
                  button 
                  className={
                    classNames(
                      classes.nested,
                      item.title === selected.database && child === selected.collection ? classes.active : null 
                    )  
                  }
                  onClick={() => handleItemClick(item.title, child)}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={child} />
                </ListItem> 
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
}

NestedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,
  onItemClick: PropTypes.func,
  error: PropTypes.shape({
    errorCode: PropTypes.number,
    errorMessage: PropTypes.string
  })
};

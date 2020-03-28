import React from 'react';
import PropTypes from 'prop-types';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import { useStyles } from './nested-list.styles';

export const NestedList = ({ items }) => {
  const classes = useStyles();
  const [openArr, setOpenArr] = React.useState(
    new Array(items.length).fill(false)
  );

  const handleClick = i => {
    const arr = [...openArr];
    arr[i] = !arr[i];
    setOpenArr(arr);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Collections
        </ListSubheader>
      }
      className={classes.root}>
      {items.map((item, index) => (
        <div key={item.title} className="nested-list-item">
          <ListItem button onClick={handleClick.bind(null, index)}>
            <ListItemIcon className={classes.itemIcon}>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
            {openArr[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openArr[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map(child => (
                <ListItem key={child} button className={classes.nested}>
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
};

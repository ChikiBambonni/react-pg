import React, { useState, useRef } from "react";
// import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import FilterListIcon from '@material-ui/icons/FilterList';

import { useOutsideClick } from "@core/hooks";
import { useStyles } from "./column-filter.styles";

export const ColumnFilters = () => {
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const filtersWrapperRef = useRef(null);
  useOutsideClick(filtersWrapperRef, setIsExpanded);

  return (
    <div>
      <div className={classes.iconWrapper}>
        <FilterListIcon 
          className="icon"
          onClick={toggleExpanded}
        />
      </div>
      {isExpanded && 
        <div 
          className={classes.filtersWrapper}
          ref={filtersWrapperRef}
        >
          <Paper style={{ minWidth: 220 }}>
            ColumnFilters works!
          </Paper>
        </div>
      }
    </div>
  );
};

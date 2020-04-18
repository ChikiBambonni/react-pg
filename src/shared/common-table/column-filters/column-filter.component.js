import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import FilterListIcon from '@material-ui/icons/FilterList';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import { useOutsideClick } from "@core/hooks";
import { useStyles } from "./column-filter.styles";

export const ColumnFilters = props => {
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = useState(false);
  
  const filtersWrapperRef = useRef(null);
  useOutsideClick(filtersWrapperRef, () => {
    setIsExpanded(false);
  });

  return (
    <div>
      <div className={classes.iconContainer}>
        <FilterListIcon 
          className="icon"
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
      {isExpanded && 
        <div 
          className={classes.filtersWrapper}
          ref={filtersWrapperRef}
        >
          <Paper className={classes.filtersContainer}>
            <div className={classes.searchContainer}>
              <TextField 
                label="Search..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon 
                          className={classes.iconSearch}
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className={classes.selectAllContainer}>
              <FormControl
                required
                component="fieldset"
                className={classes.formControl}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox 
                        checked={false}
                        onChange={() => console.log('Select All')}
                        name="all" 
                      />
                    }
                    label="Select All"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div className={classes.selectContainer}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  {props.items.map(item => (
                    <FormControlLabel
                      key={item}
                      control={
                        <Checkbox
                          onChange={() => console.log('change')}
                          name={item}
                        />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </div>
          </Paper>
        </div>
      }
    </div>
  );
};

ColumnFilters.propTypes = {
  items: PropTypes.string
};

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { List } from "react-virtualized";
import Paper from "@material-ui/core/Paper";
import FilterListIcon from "@material-ui/icons/FilterList";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { difference } from "ramda";

import { CommonSpinner } from "@shared/common-spinner";
import { ErrorMessage } from "@shared/error-message";
import { useOutsideClick, useFetch } from "@core/hooks";
import { useStyles } from "./column-filter.styles";
import { FilterItem } from "./filter-item";

export const ColumnFilters = ({
  fetchEffect,
  columnName,
  columnIndex,
  onFilterSelect, 
}) => {
  const classes = useStyles();

  const [isExpanded, setIsExpanded]             = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [items, setItems]                       = useState([]);
  const [checkedItems, setCheckedItems]         = useState([]);
  const [loading, setLoading]                   = useState(true);
  const [error, setError]                       = useState(null);
  
  useEffect(() => {
    useFetch(
      fetchEffect(1, 1000, { [columnName]: 1 }, {}), // TODO: define paging here
      setLoading,
      setError
    )
      .then(res => res.elements)
      .then(res => res.map(e => e[columnName]))
      .then(res => {
        setItems(res);
        setCheckedItems(res);
        setSelectAllChecked(true);
      })
      .catch(e => e);
  }, []);

  const filtersWrapperRef = useRef(null);
  useOutsideClick(filtersWrapperRef, () => {
    setIsExpanded(false);
  });

  const rowRenderer = rendererProps => {
    return (
      <FilterItem 
        items={items} 
        checkedItems={checkedItems}
        onChange={handleItemChange}
        { ...rendererProps }
      />
    );
  };

  const handleItemChange = item => {
    const data = checkedItems.includes(item) ?
      checkedItems.filter(i => i !== item) :
      [...checkedItems, item];
    setCheckedItems(data);
    setSelectAllChecked(data.length === items.length);
    onFilterSelect(columnName, difference(items, data));
  };

  const handleSelectAllChange = () => {
    setCheckedItems(!selectAllChecked ? items : []);
    setSelectAllChecked(!selectAllChecked);
  };

  const handleSearchInput = $event => {
    const search = $event.target.value;
    useFetch(
      fetchEffect(1, 1000, {}, { "$regex" : { [columnName]: search } }),
      setLoading,
      setError
    )
      .then(res => res.elements)
      .then(res => res.map(e => e[columnName]))
      .then(res => setItems(res))
      .catch(e => e);
  };

  return (
    <div>
      <div className={classes.iconContainer}>
        <FilterListIcon 
          className="icon"
          onClick={() => { 
            setIsExpanded(!isExpanded);
          }}
        />
      </div>
      {isExpanded && 
        <div 
          className={classes.filtersWrapper}
          style={{
            right: columnIndex === 0 ? -220 : 0
          }}
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
                onChange={$event => handleSearchInput($event)}
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
                        checked={selectAllChecked}
                        onChange={() => handleSelectAllChange()}
                        name="all" 
                      />
                    }
                    label="Select All"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div className={classes.selectContainer}>
              <ErrorMessage error={error}></ErrorMessage>
              <CommonSpinner 
                loading={loading}
                size={8}
              />
              {!loading && 
                <FormControl 
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormGroup>
                    <List
                      className={classes.virtualizedList}
                      width={220}
                      height={220}
                      rowCount={items.length}
                      rowHeight={40}
                      rowRenderer={rowRenderer} // TODO: define getter here
                    />
                  </FormGroup>
                </FormControl>}
            </div>
          </Paper>
        </div>
      }
    </div>
  );
};

ColumnFilters.propTypes = {
  fetchEffect: PropTypes.func,
  columnName: PropTypes.string.isRequired,
  columnIndex: PropTypes.number,
  onFilterSelect: PropTypes.func
};

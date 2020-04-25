import React from "react";
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const FilterItem = ({
  index, 
  style,
  onChange,
  items,
  checkedItems
}) => {
  return (
    <FormControlLabel
      style={style}
      key={index}
      control={
        <Checkbox
          checked={checkedItems.includes(items[index])}
          onChange={() => onChange(items[index])}
          name={items[index]}
        />
      }
      label={items[index]}
    />
  );
}

FilterItem.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object,
  onChange: PropTypes.func,
  items: PropTypes.any.isRequired, // TODO: check type here
  checkedItems: PropTypes.any.isRequired, // TODO: check type here
}

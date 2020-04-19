import React from "react";
import PropTypes from "prop-types";
import GridLoader from "react-spinners/GridLoader";

import { warningColors } from '@styles/variables';
import { useStyles } from './common-spinner.styles';

export const CommonSpinner = ({ loading, size }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.loadingShade} 
      style={{
        display: loading ? 'flex' : 'none'
      }}
    >
      <GridLoader
        color={warningColors.main}
        loading={loading}
        size={size}
      >
      </GridLoader>
    </div>
  );
}

CommonSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number
}
